var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { FileSystemManager } from "./file-system-manager";
import { ServiceManager } from "./service-manager";
import { State } from "./state";
import { Workspace } from "./workspace";
import { diff, gte } from "semver";
var App = /** @class */ (function () {
    function App(version) {
        this.workspace = new Workspace();
        this.fileSystemManager = new FileSystemManager();
        this.state = new State();
        this.services = new ServiceManager();
        this.version = version;
    }
    App.prototype.dependencyValid = function (installedVersion, requiredVersion) {
        var versionDiff = diff(installedVersion, requiredVersion);
        return ((versionDiff === null ||
            versionDiff === "patch" ||
            versionDiff === "minor") &&
            gte(installedVersion, requiredVersion));
    };
    /**
     * Install plugin, and check plugin dependencies has bee installed.
     * @param plugin - The plugin need installed.
     */
    App.prototype.installPlugin = function (plugin) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, minAppVersion, dependencies, installErrors, pluginName, requiredPluginVersion, installedPlugin, installedPluginVersion;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = plugin.manifest, minAppVersion = _a.minAppVersion, dependencies = _a.dependencies;
                        installErrors = [];
                        if (!this.dependencyValid(this.version, minAppVersion)) {
                            installErrors.push("Plugin " + plugin.manifest.name + " need minAppVersion " + minAppVersion + ", but app version is " + this.version + "!");
                        }
                        if (dependencies) {
                            for (pluginName in dependencies) {
                                requiredPluginVersion = dependencies[pluginName];
                                installedPlugin = this.state.getPlugin(pluginName);
                                if (!installedPlugin) {
                                    installErrors.push("Plugin " + pluginName + " has not installed");
                                }
                                else {
                                    installedPluginVersion = installedPlugin.manifest.version;
                                    if (!this.dependencyValid(installedPluginVersion, requiredPluginVersion)) {
                                        installErrors.push("Plugin " + pluginName + " need version " + requiredPluginVersion + ", but " + installedPluginVersion + " installed!");
                                    }
                                }
                            }
                        }
                        if (!(installErrors.length === 0)) return [3 /*break*/, 2];
                        this.state.registerPlugin(plugin);
                        return [4 /*yield*/, plugin.install()];
                    case 1:
                        _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        installErrors.forEach(function (err) { return console.error(err); });
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Activate plugin that has been installed.
     * @param {Plugin} plugin - The plugin need activate
     */
    App.prototype.activatePlugin = function (plugin) {
        plugin.activate();
    };
    /**
     * Deactivate plugin that has been installed.
     * @param {string} id - The plugin id need deactivate
     */
    App.prototype.deactivatePlugin = function (id) {
        var plugin = this.state.getPlugin(id);
        if (plugin) {
            plugin.deactivate();
        }
    };
    return App;
}());
export { App };
//# sourceMappingURL=app.js.map