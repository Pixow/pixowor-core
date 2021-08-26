(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "events", "rxjs", "semver"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PluginStore = exports.Event = void 0;
    const events_1 = require("events");
    const rxjs_1 = require("rxjs");
    const semver_1 = require("semver");
    class Event {
        constructor(name, data = {}) {
            this.name = name;
            this.data = data;
        }
    }
    exports.Event = Event;
    class PluginStore extends events_1.EventEmitter {
        constructor() {
            super();
            this._observerMap = new Map();
            this._functionArray = new Map();
            this._pluginMap = new Map();
        }
        get observerMap() {
            return this._observerMap;
        }
        dependencyValid(installedVersion, requiredVersion) {
            const versionDiff = semver_1.diff(installedVersion, requiredVersion);
            return ((versionDiff === null ||
                versionDiff === "patch" ||
                versionDiff === "minor") &&
                semver_1.gte(installedVersion, requiredVersion));
        }
        getInstalledPlugins() {
            return Array.from(this._pluginMap.values());
        }
        install(plugin) {
            const pluginNameAndVer = plugin.getPluginIdentify();
            const [pluginName, _] = pluginNameAndVer.split("@");
            const pluginDependencies = plugin.getDependencies() || [];
            const installed = this._pluginMap.get(pluginName);
            if (installed) {
                return;
            }
            // check dependencies is installed
            let installErrors = [];
            pluginDependencies.forEach((dep) => {
                const [depName, depVersion] = dep.split("@");
                const plugin = this._pluginMap.get(depName);
                if (!plugin) {
                    installErrors.push(`Plugin ${pluginName}: ${depName} has not installed!`);
                }
                else {
                    const [, installedVersion] = plugin.getPluginIdentify().split("@");
                    if (!this.dependencyValid(installedVersion, depVersion)) {
                        installErrors.push(`Plugin ${pluginName} need ${depName}@${depVersion}, but ${installedVersion} installed!`);
                    }
                }
            });
            if (installErrors.length === 0) {
                this._pluginMap.set(pluginName, plugin);
                plugin.activate();
            }
            else {
                installErrors.forEach((err) => console.error(err));
            }
        }
        uninstall(pluginName) {
            let plugin = this._pluginMap.get(pluginName);
            if (plugin) {
                plugin.deactivate();
                this._pluginMap.delete(pluginName);
            }
        }
        addFunction(key, fn) {
            this._functionArray.set(key, fn);
        }
        execFunction(key, ...args) {
            let fn = this._functionArray.get(key);
            if (fn) {
                return fn(...args);
            }
        }
        removeFunction(key) {
            this._functionArray.delete(key);
        }
        addEventListener(name, listener) {
            this.addListener(name, listener);
        }
        addOnceEventListener(name, listener) {
            this.once(name, listener);
        }
        removeEventListener(name, listener) {
            this.removeListener(name, listener);
        }
        dispatchEvent(event) {
            this.emit(event.name, event);
        }
        removeAllEvents() {
            this.removeAllListeners();
        }
        registObserver(name, data) {
            this._observerMap.set(name, new rxjs_1.BehaviorSubject(data || null));
        }
        getObserver(name) {
            return this._observerMap.get(name);
        }
    }
    exports.PluginStore = PluginStore;
});
//# sourceMappingURL=plugin-store.js.map