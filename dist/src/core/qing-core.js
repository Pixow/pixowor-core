var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "electron-re", "qing-web-api-sdk", "@angular/core", "./events", "./plugin-store"], factory);
    }
})(function (require, exports) {
    "use strict";
    var QingCore_1;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.QingCore = exports.Severity = void 0;
    const electron_re_1 = require("electron-re");
    const qing_web_api_sdk_1 = require("qing-web-api-sdk");
    const core_1 = require("@angular/core");
    const events_1 = require("./events");
    const plugin_store_1 = require("./plugin-store");
    var Severity;
    (function (Severity) {
        Severity["SUCCESS"] = "success";
        Severity["ERROR"] = "error";
        Severity["INFO"] = "info";
    })(Severity = exports.Severity || (exports.Severity = {}));
    let QingCore = QingCore_1 = class QingCore extends plugin_store_1.PluginStore {
        constructor() {
            super();
            this.pluginVariables = new Map();
            this.services = new Map();
        }
        /**
         * 将angular的service实例注入
         * @param service AngularService
         * @param serviceInstance AngularService Instance
         */
        InjectService(service, serviceInstance) {
            this.services.set(service.name, serviceInstance);
        }
        /**
         * 获取某个Service实例
         * @param service
         */
        GetService(service) {
            return this.services.get(service.name);
        }
        /****************************** Plugin Api *****************************/
        InstallPlugin(plugin) {
            this.install(plugin);
        }
        UninstallPlugin(pluginName) {
            this.uninstall(pluginName);
        }
        EnablePlugin(pluginName, pluginConfig) { }
        DisablePlugin(pluginName) {
            const variables = this.pluginVariables.get(pluginName);
            if (variables && variables.length > 0) {
                const observers = variables.map((varName) => this.observerMap.get(varName));
                observers.forEach((observer) => {
                    if (observer) {
                        observer.next(null);
                        observer.complete();
                    }
                });
            }
        }
        /*******************************************************************************/
        /****************************** UI Api *****************************/
        Toast(severity, message) {
            this.Emit(new plugin_store_1.Event(events_1.UIEvents.TOAST, { severity, message }));
        }
        Alert(message) {
            this.Emit(new plugin_store_1.Event(events_1.UIEvents.ALERT, { message }));
        }
        OpenDialog(componentName) {
            this.Emit(new plugin_store_1.Event(events_1.UIEvents.OPEN_DIALOG, { componentName }));
        }
        CloseDialog() {
            this.Emit(new plugin_store_1.Event(events_1.UIEvents.CLOSE_DIALOG));
        }
        LoadInMenu(componentName) {
            this.Emit(new plugin_store_1.Event(events_1.UIEvents.LOAD_IN_MENU, { componentName }));
        }
        LoadInSidebar(componentName) {
            this.Emit(new plugin_store_1.Event(events_1.UIEvents.LOAD_IN_SIDEBAR, { componentName }));
        }
        LoadInEditorArea(componentName) {
            this.Emit(new plugin_store_1.Event(events_1.UIEvents.LOAD_IN_EDITORAREA, { componentName }));
        }
        LoadInConsolePanel(componentName) {
            this.Emit(new plugin_store_1.Event(events_1.UIEvents.LOAD_IN_PANEL, { componentName }));
        }
        LoadInWidgetBar(componentName) {
            this.Emit(new plugin_store_1.Event(events_1.UIEvents.LOAD_IN_WIDGETBAR, { componentName }));
        }
        RegistVariable(pluginName, varName, data) {
            const variables = this.pluginVariables.get(pluginName);
            if (typeof variables === "object" && variables.length > 0) {
                if (variables.indexOf(varName) < 0) {
                    this.registObserver(varName, data);
                }
            }
            else {
                this.pluginVariables.set(pluginName, [varName]);
                this.registObserver(varName, data);
            }
        }
        GetVariable(varName) {
            return this.getObserver(varName);
        }
        /*******************************************************************************/
        /****************************** Storage Api *****************************/
        Set(key, data) {
            if (typeof data === "object") {
                localStorage.setItem(key, JSON.stringify(data));
            }
            else {
                localStorage.setItem(key, data);
            }
        }
        Get(key) {
            const data = localStorage.getItem(key);
            if (!data)
                return null;
            try {
                return JSON.parse(data);
            }
            catch (error) {
                return data;
            }
        }
        Remove(key) {
            localStorage.removeItem(key);
        }
        /*******************************************************************************/
        /****************************** Event Listener Api *****************************/
        Emit(event) {
            this.dispatchEvent(event);
        }
        On(eventName, listener) {
            this.addEventListener(eventName, listener);
        }
        Once(eventName, listener) {
            this.addOnceEventListener(eventName, listener);
        }
        Off(eventName, listener) {
            this.removeListener(eventName, listener);
        }
        OffAll() {
            this.removeAllEvents();
        }
        /*******************************************************************************/
        Invoke(funcName, ...args) {
            return this.execFunction(funcName, ...args);
        }
        Bind(funcName, fn) {
            this.addFunction(funcName, fn);
        }
        UnBind(funcName) {
            this.removeFunction(funcName);
        }
        /****************************** IO Api *****************************************/
        ListDir(dir) {
            return new Promise((resolve, reject) => {
                electron_re_1.EreMessageChannel
                    .invoke(QingCore_1.IoServiceName, events_1.IOEvents.LISTDIR, {
                    dir,
                })
                    .then((res) => {
                    const { error, data } = res;
                    if (error) {
                        reject(error);
                        return;
                    }
                    resolve(data);
                });
            });
        }
        RemoveDir(dir) {
            return new Promise((resolve, reject) => {
                electron_re_1.EreMessageChannel
                    .invoke(QingCore_1.IoServiceName, events_1.IOEvents.REMOVEDIR, { dir })
                    .then((res) => {
                    const { error, data } = res;
                    if (error) {
                        reject(error);
                        return;
                    }
                    resolve(data);
                });
            });
        }
        ReadFile(file) {
            return new Promise((resolve, reject) => {
                electron_re_1.EreMessageChannel
                    .invoke(QingCore_1.IoServiceName, events_1.IOEvents.READFILE, {
                    file,
                    options: { encoding: "utf8" },
                })
                    .then((res) => {
                    const { error, data } = res;
                    if (error) {
                        reject(error);
                        return;
                    }
                    resolve(data);
                });
            });
        }
        WriteFile(file, data) {
            return new Promise((resolve, reject) => {
                electron_re_1.EreMessageChannel
                    .invoke(QingCore_1.IoServiceName, events_1.IOEvents.WRITEFILE, {
                    file,
                    data,
                })
                    .then((res) => {
                    const { error, data } = res;
                    if (error) {
                        reject(error);
                        return;
                    }
                    resolve(data);
                });
            });
        }
        RemoveFile(file, data) {
            return new Promise((resolve, reject) => {
                electron_re_1.EreMessageChannel
                    .invoke(QingCore_1.IoServiceName, events_1.IOEvents.REMOVEFILE, {
                    file,
                    data,
                })
                    .then((res) => {
                    const { error, data } = res;
                    if (error) {
                        reject(error);
                        return;
                    }
                    resolve(data);
                });
            });
        }
        ReadJson(path) {
            return new Promise((resolve, reject) => {
                electron_re_1.EreMessageChannel
                    .invoke(QingCore_1.IoServiceName, events_1.IOEvents.READJSON, {
                    path,
                })
                    .then((res) => {
                    const { error, data } = res;
                    if (error) {
                        reject(error);
                        return;
                    }
                    resolve(data);
                });
            });
        }
        WriteJson(path, data) {
            return new Promise((resolve, reject) => {
                electron_re_1.EreMessageChannel
                    .invoke(QingCore_1.IoServiceName, events_1.IOEvents.WRITEJSON, {
                    path,
                    data,
                })
                    .then((res) => {
                    const { error, data } = res;
                    if (error) {
                        reject(error);
                        return;
                    }
                    resolve(data);
                });
            });
        }
        DownloadFile(url, output) {
            return new Promise((resolve, reject) => {
                electron_re_1.EreMessageChannel
                    .invoke(QingCore_1.IoServiceName, events_1.IOEvents.DOWNLOADFILE, {
                    url,
                    output,
                })
                    .then((res) => {
                    const { error, data } = res;
                    if (error) {
                        reject(error);
                        return;
                    }
                    resolve(data);
                });
            });
        }
        UploadFile(file) {
            return new Promise((resolve, reject) => {
                electron_re_1.EreMessageChannel
                    .invoke(QingCore_1.IoServiceName, events_1.IOEvents.UPLOADFILE, {
                    file,
                })
                    .then((res) => {
                    const { error, data } = res;
                    if (error) {
                        reject(error);
                        return;
                    }
                    resolve(data);
                });
            });
        }
        CopyFiles(source, dest) {
            return new Promise((resolve, reject) => {
                electron_re_1.EreMessageChannel
                    .invoke(QingCore_1.IoServiceName, events_1.IOEvents.COPYFILES, {
                    source,
                    dest
                })
                    .then((res) => {
                    const { error, data } = res;
                    if (error) {
                        reject(error);
                        return;
                    }
                    resolve(data);
                });
            });
        }
        ZipFiles(files) {
            return new Promise((resolve, reject) => {
                electron_re_1.EreMessageChannel
                    .invoke(QingCore_1.IoServiceName, events_1.IOEvents.ZIPFILES, {
                    files,
                })
                    .then((res) => {
                    const { error, data } = res;
                    if (error) {
                        reject(error);
                        return;
                    }
                    resolve(data);
                });
            });
        }
        Unzip(file) {
            return new Promise((resolve, reject) => {
                electron_re_1.EreMessageChannel
                    .invoke(QingCore_1.IoServiceName, events_1.IOEvents.UNZIP, {
                    file,
                })
                    .then((res) => {
                    const { error, data } = res;
                    if (error) {
                        reject(error);
                        return;
                    }
                    resolve(data);
                });
            });
        }
        /*******************************************************************************/
        /****************************** Web Service Api *****************************************/
        get WebServiceSdk() {
            return qing_web_api_sdk_1.QingWebApiSdk.getInstance();
        }
        /*******************************************************************************/
        Destroy() {
            const observers = Array.from(this.observerMap.values());
            observers.forEach((observer) => {
                observer.next(null);
                observer.complete();
            });
            super.removeAllListeners();
            this.OffAll();
        }
    };
    QingCore.IoServiceName = "io-service";
    QingCore = QingCore_1 = __decorate([
        core_1.Injectable({
            providedIn: "root",
        }),
        __metadata("design:paramtypes", [])
    ], QingCore);
    exports.QingCore = QingCore;
});
//# sourceMappingURL=qing-core.js.map