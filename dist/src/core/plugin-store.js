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
    PluginStore.prototype.install = function (plugin) {
        var _this = this;
        var pluginNameAndVer = plugin.getPluginIdentify();
        var _a = pluginNameAndVer.split("@"), pluginName = _a[0], _ = _a[1];
        var pluginDependencies = plugin.getDependencies() || [];
        var installed = this._pluginMap.get(pluginName);
        if (installed) {
            return;
        }
        // check dependencies is installed
        var installErrors = [];
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
        if (installErrors.length === 0) {
            this._pluginMap.set(pluginName, plugin);
            plugin.activate();
        }
        else {
            installErrors.forEach(function (err) { return console.error(err); });
        }
    };
    PluginStore.prototype.uninstall = function (pluginName) {
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