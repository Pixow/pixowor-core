var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import { EventEmitter } from "events";
import { BehaviorSubject } from "rxjs";
import { diff, gte } from "semver";
var Event = /** @class */ (function () {
    function Event(name, data) {
        if (data === void 0) { data = {}; }
        this.name = name;
        this.data = data;
    }
    return Event;
}());
export { Event };
var PluginStore = /** @class */ (function (_super) {
    __extends(PluginStore, _super);
    function PluginStore() {
        var _this = _super.call(this) || this;
        _this._observerMap = new Map();
        _this._functionArray = new Map();
        _this._pluginMap = new Map();
        return _this;
    }
    Object.defineProperty(PluginStore.prototype, "observerMap", {
        get: function () {
            return this._observerMap;
        },
        enumerable: false,
        configurable: true
    });
    PluginStore.prototype.dependencyValid = function (installedVersion, requiredVersion) {
        var versionDiff = diff(installedVersion, requiredVersion);
        return ((versionDiff === null ||
            versionDiff === "patch" ||
            versionDiff === "minor") &&
            gte(installedVersion, requiredVersion));
    };
    PluginStore.prototype.getInstalledPlugins = function () {
        return Array.from(this._pluginMap.values());
    };
    PluginStore.prototype.prepare = function (plugin) {
        return __awaiter(this, void 0, void 0, function () {
            var pluginNameAndVer, _a, pluginName, _, pluginDependencies, installed, installErrors;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        pluginNameAndVer = plugin.getPluginIdentify();
                        _a = pluginNameAndVer.split("@"), pluginName = _a[0], _ = _a[1];
                        pluginDependencies = plugin.getDependencies() || [];
                        installed = this._pluginMap.get(pluginName);
                        if (installed) {
                            return [2 /*return*/];
                        }
                        installErrors = [];
                        pluginDependencies.forEach(function (dep) {
                            var _a = dep.split("@"), depName = _a[0], depVersion = _a[1];
                            var plugin = _this._pluginMap.get(depName);
                            if (!plugin) {
                                installErrors.push("Plugin " + pluginName + ": " + depName + " has not installed!");
                            }
                            else {
                                var _b = plugin.getPluginIdentify().split("@"), installedVersion = _b[1];
                                if (!_this.dependencyValid(installedVersion, depVersion)) {
                                    installErrors.push("Plugin " + pluginName + " need " + depName + "@" + depVersion + ", but " + installedVersion + " installed!");
                                }
                            }
                        });
                        if (!(installErrors.length === 0)) return [3 /*break*/, 2];
                        this._pluginMap.set(pluginName, plugin);
                        return [4 /*yield*/, plugin.prepare()];
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
    PluginStore.prototype.activate = function (plugin) {
        plugin.activate();
    };
    PluginStore.prototype.deactivate = function (pluginName) {
        var plugin = this._pluginMap.get(pluginName);
        if (plugin) {
            plugin.deactivate();
            this._pluginMap.delete(pluginName);
        }
    };
    PluginStore.prototype.addFunction = function (key, fn) {
        this._functionArray.set(key, fn);
    };
    PluginStore.prototype.execFunction = function (key) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var fn = this._functionArray.get(key);
        if (fn) {
            return fn.apply(void 0, args);
        }
    };
    PluginStore.prototype.removeFunction = function (key) {
        this._functionArray.delete(key);
    };
    PluginStore.prototype.addEventListener = function (name, listener) {
        this.addListener(name, listener);
    };
    PluginStore.prototype.addOnceEventListener = function (name, listener) {
        this.once(name, listener);
    };
    PluginStore.prototype.removeEventListener = function (name, listener) {
        this.removeListener(name, listener);
    };
    PluginStore.prototype.dispatchEvent = function (event) {
        this.emit(event.name, event);
    };
    PluginStore.prototype.removeAllEvents = function () {
        this.removeAllListeners();
    };
    PluginStore.prototype.registObserver = function (name, data) {
        this._observerMap.set(name, new BehaviorSubject(data || null));
    };
    PluginStore.prototype.getObserver = function (name) {
        return this._observerMap.get(name);
    };
    return PluginStore;
}(EventEmitter));
export { PluginStore };
//# sourceMappingURL=plugin-store.js.map