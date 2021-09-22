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
import { UIEvents } from "./events";
var Plugin = /** @class */ (function () {
    function Plugin(qingCore, manifest) {
        this._qingCore = qingCore;
        this.pid = manifest.pid;
        this.name = manifest.name;
        this.author = manifest.author;
        this.version = manifest.version;
        this.description = manifest.description;
        this.minAppVersion = manifest.minAppVersion;
        this.authorUrl = manifest.authorUrl;
        this.dependencies = manifest.dependencies;
    }
    Plugin.prototype.install = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    Object.defineProperty(Plugin.prototype, "qingCore", {
        /**
         * Get qing core
         */
        get: function () {
            return this._qingCore;
        },
        enumerable: false,
        configurable: true
    });
    Plugin.prototype.colorLog = function (message) {
        console.log("%c " + message, "background: #222; color: #bada55");
    };
    /**
     * Register a command globally. The command id and name will be automatically prefixed with this plugin's id and name.
     * @param command Command
     */
    Plugin.prototype.addCommand = function (command) {
        this.qingCore.serviceManager.registCommand(command);
    };
    /**
     *
     * @param {string} label - Menu label
     * @param {Function} callback - The callback to trigger
     */
    Plugin.prototype.addMenu = function (label, callback) {
        this.qingCore.workspace.emit(UIEvents.ADD_MENU, { label: label, callback: callback });
    };
    /**
     * Regist angular component for use.
     * @param  {string} name - Component
     * @param  {Component} component - Register a angular component. The function will use component classname as key to regist.
     */
    Plugin.prototype.registerComponent = function (name, component) {
        this.qingCore.stateManager.registerComponent(name, component);
    };
    /**
     * UnRegister angular component that registed.
     * @param name - Component name
     */
    Plugin.prototype.unRrgisterComponent = function (name) {
        this.qingCore.stateManager.unregisterComponent(name);
    };
    /**
     * Regist variable
     * @param name - variable name
     * @param data - variable init data
     */
    Plugin.prototype.registerVariable = function (name, data) {
        if (data === void 0) { data = null; }
        this.qingCore.stateManager.registerVariable(name, data);
    };
    /**
     * UnRegister variable
     * @param name - variable name
     */
    Plugin.prototype.unRegisterVariable = function (name) {
        this.qingCore.stateManager.unRegisterVariable(name);
    };
    /**
     * Toast message
     * @param {Severity} severity - Message severity.
     * @param {string} message - Toast message.
     */
    Plugin.prototype.toast = function (severity, message) {
        this.qingCore.workspace.toast(severity, message);
    };
    Plugin.prototype.alert = function (message) {
        this.qingCore.workspace.emit(UIEvents.ALERT, { message: message });
    };
    /**
     * Open a component you registed in a dialog.
     * @param {string} componentName - Component name.
     */
    Plugin.prototype.openDialog = function (componentName) {
        this.qingCore.workspace.emit(UIEvents.OPEN_DIALOG, { componentName: componentName });
    };
    /**
     * Get value from localstorage
     * @param key localstorage key
     * @returns
     */
    Plugin.prototype.get = function (key) {
        return this.qingCore.storageManager.get(key);
    };
    return Plugin;
}());
export { Plugin };
//# sourceMappingURL=plugin.js.map