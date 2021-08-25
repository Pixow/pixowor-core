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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { EreMessageChannel as msgc } from "electron-re";
import { QingWebApiSdk } from "qing-web-api-sdk";
import { Injectable } from "@angular/core";
import { IOEvents, UIEvents } from "./events";
import { Event, PluginStore } from "./plugin-store";
export var Severity;
(function (Severity) {
    Severity["SUCCESS"] = "success";
    Severity["ERROR"] = "error";
    Severity["INFO"] = "info";
})(Severity || (Severity = {}));
var QingCore = /** @class */ (function (_super) {
    __extends(QingCore, _super);
    function QingCore() {
        var _this = _super.call(this) || this;
        _this.pluginVariables = new Map();
        _this.services = new Map();
        return _this;
    }
    QingCore_1 = QingCore;
    /**
     * 将angular的service实例注入
     * @param service AngularService
     * @param serviceInstance AngularService Instance
     */
    QingCore.prototype.InjectService = function (service, serviceInstance) {
        this.services.set(service.name, serviceInstance);
    };
    /**
     * 获取某个Service实例
     * @param service
     */
    QingCore.prototype.GetService = function (service) {
        return this.services.get(service.name);
    };
    /****************************** Plugin Api *****************************/
    QingCore.prototype.InstallPlugin = function (plugin) {
        this.install(plugin);
    };
    QingCore.prototype.UninstallPlugin = function (pluginName) {
        this.uninstall(pluginName);
    };
    QingCore.prototype.EnablePlugin = function (pluginName, pluginConfig) { };
    QingCore.prototype.DisablePlugin = function (pluginName) {
        var _this = this;
        var variables = this.pluginVariables.get(pluginName);
        if (variables && variables.length > 0) {
            var observers = variables.map(function (varName) {
                return _this.observerMap.get(varName);
            });
            observers.forEach(function (observer) {
                if (observer) {
                    observer.next(null);
                    observer.complete();
                }
            });
        }
    };
    /*******************************************************************************/
    /****************************** UI Api *****************************/
    QingCore.prototype.Toast = function (severity, message) {
        this.Emit(new Event(UIEvents.TOAST, { severity: severity, message: message }));
    };
    QingCore.prototype.Alert = function (message) {
        this.Emit(new Event(UIEvents.ALERT, { message: message }));
    };
    QingCore.prototype.OpenDialog = function (componentName) {
        this.Emit(new Event(UIEvents.OPEN_DIALOG, { componentName: componentName }));
    };
    QingCore.prototype.CloseDialog = function () {
        this.Emit(new Event(UIEvents.CLOSE_DIALOG));
    };
    QingCore.prototype.LoadInMenu = function (componentName) {
        this.Emit(new Event(UIEvents.LOAD_IN_MENU, { componentName: componentName }));
    };
    QingCore.prototype.LoadInSidebar = function (componentName) {
        this.Emit(new Event(UIEvents.LOAD_IN_SIDEBAR, { componentName: componentName }));
    };
    QingCore.prototype.LoadInEditorArea = function (componentName) {
        this.Emit(new Event(UIEvents.LOAD_IN_EDITORAREA, { componentName: componentName }));
    };
    QingCore.prototype.LoadInConsolePanel = function (componentName) {
        this.Emit(new Event(UIEvents.LOAD_IN_PANEL, { componentName: componentName }));
    };
    QingCore.prototype.LoadInWidgetBar = function (componentName) {
        this.Emit(new Event(UIEvents.LOAD_IN_WIDGETBAR, { componentName: componentName }));
    };
    QingCore.prototype.RegistVariable = function (pluginName, varName, data) {
        var variables = this.pluginVariables.get(pluginName);
        if (typeof variables === "object" && variables.length > 0) {
            if (variables.indexOf(varName) < 0) {
                this.registObserver(varName, data);
            }
        }
        else {
            this.pluginVariables.set(pluginName, [varName]);
            this.registObserver(varName, data);
        }
    };
    QingCore.prototype.GetVariable = function (varName) {
        return this.getObserver(varName);
    };
    /*******************************************************************************/
    /****************************** Storage Api *****************************/
    QingCore.prototype.Set = function (key, data) {
        if (typeof data === "object") {
            localStorage.setItem(key, JSON.stringify(data));
        }
        else {
            localStorage.setItem(key, data);
        }
    };
    QingCore.prototype.Get = function (key) {
        var data = localStorage.getItem(key);
        if (!data)
            return null;
        try {
            return JSON.parse(data);
        }
        catch (error) {
            return data;
        }
    };
    QingCore.prototype.Remove = function (key) {
        localStorage.removeItem(key);
    };
    /*******************************************************************************/
    /****************************** Event Listener Api *****************************/
    QingCore.prototype.Emit = function (event) {
        this.dispatchEvent(event);
    };
    QingCore.prototype.On = function (eventName, listener) {
        this.addEventListener(eventName, listener);
    };
    QingCore.prototype.Once = function (eventName, listener) {
        this.addOnceEventListener(eventName, listener);
    };
    QingCore.prototype.Off = function (eventName, listener) {
        this.removeListener(eventName, listener);
    };
    QingCore.prototype.OffAll = function () {
        this.removeAllEvents();
    };
    /*******************************************************************************/
    QingCore.prototype.Invoke = function (funcName) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return this.execFunction.apply(this, __spreadArrays([funcName], args));
    };
    QingCore.prototype.Bind = function (funcName, fn) {
        this.addFunction(funcName, fn);
    };
    QingCore.prototype.UnBind = function (funcName) {
        this.removeFunction(funcName);
    };
    /****************************** IO Api *****************************************/
    QingCore.prototype.ListDir = function (dir) {
        return new Promise(function (resolve, reject) {
            msgc
                .invoke(QingCore_1.IoServiceName, IOEvents.LISTDIR, {
                dir: dir,
            })
                .then(function (res) {
                var error = res.error, data = res.data;
                if (error) {
                    reject(error);
                    return;
                }
                resolve(data);
            });
        });
    };
    QingCore.prototype.RemoveDir = function (dir) {
        return new Promise(function (resolve, reject) {
            msgc
                .invoke(QingCore_1.IoServiceName, IOEvents.REMOVEDIR, { dir: dir })
                .then(function (res) {
                var error = res.error, data = res.data;
                if (error) {
                    reject(error);
                    return;
                }
                resolve(data);
            });
        });
    };
    QingCore.prototype.ReadFile = function (file) {
        return new Promise(function (resolve, reject) {
            msgc
                .invoke(QingCore_1.IoServiceName, IOEvents.READFILE, {
                file: file,
                options: { encoding: "utf8" },
            })
                .then(function (res) {
                var error = res.error, data = res.data;
                if (error) {
                    reject(error);
                    return;
                }
                resolve(data);
            });
        });
    };
    QingCore.prototype.WriteFile = function (file, data) {
        return new Promise(function (resolve, reject) {
            msgc
                .invoke(QingCore_1.IoServiceName, IOEvents.WRITEFILE, {
                file: file,
                data: data,
            })
                .then(function (res) {
                var error = res.error, data = res.data;
                if (error) {
                    reject(error);
                    return;
                }
                resolve(data);
            });
        });
    };
    QingCore.prototype.RemoveFile = function (file, data) {
        return new Promise(function (resolve, reject) {
            msgc
                .invoke(QingCore_1.IoServiceName, IOEvents.REMOVEFILE, {
                file: file,
                data: data,
            })
                .then(function (res) {
                var error = res.error, data = res.data;
                if (error) {
                    reject(error);
                    return;
                }
                resolve(data);
            });
        });
    };
    QingCore.prototype.ReadJson = function (path) {
        return new Promise(function (resolve, reject) {
            msgc
                .invoke(QingCore_1.IoServiceName, IOEvents.READJSON, {
                path: path,
            })
                .then(function (res) {
                var error = res.error, data = res.data;
                if (error) {
                    reject(error);
                    return;
                }
                resolve(data);
            });
        });
    };
    QingCore.prototype.WriteJson = function (path, data) {
        return new Promise(function (resolve, reject) {
            msgc
                .invoke(QingCore_1.IoServiceName, IOEvents.WRITEJSON, {
                path: path,
                data: data,
            })
                .then(function (res) {
                var error = res.error, data = res.data;
                if (error) {
                    reject(error);
                    return;
                }
                resolve(data);
            });
        });
    };
    QingCore.prototype.DownloadFile = function (url, output) {
        return new Promise(function (resolve, reject) {
            msgc
                .invoke(QingCore_1.IoServiceName, IOEvents.DOWNLOADFILE, {
                url: url,
                output: output,
            })
                .then(function (res) {
                var error = res.error, data = res.data;
                if (error) {
                    reject(error);
                    return;
                }
                resolve(data);
            });
        });
    };
    QingCore.prototype.UploadFile = function (file) {
        return new Promise(function (resolve, reject) {
            msgc
                .invoke(QingCore_1.IoServiceName, IOEvents.UPLOADFILE, {
                file: file,
            })
                .then(function (res) {
                var error = res.error, data = res.data;
                if (error) {
                    reject(error);
                    return;
                }
                resolve(data);
            });
        });
    };
    QingCore.prototype.CopyFiles = function (files) {
        return new Promise(function (resolve, reject) {
            msgc
                .invoke(QingCore_1.IoServiceName, IOEvents.COPYFILES, {
                files: files,
            })
                .then(function (res) {
                var error = res.error, data = res.data;
                if (error) {
                    reject(error);
                    return;
                }
                resolve(data);
            });
        });
    };
    QingCore.prototype.ZipFiles = function (files) {
        return new Promise(function (resolve, reject) {
            msgc
                .invoke(QingCore_1.IoServiceName, IOEvents.ZIPFILES, {
                files: files,
            })
                .then(function (res) {
                var error = res.error, data = res.data;
                if (error) {
                    reject(error);
                    return;
                }
                resolve(data);
            });
        });
    };
    QingCore.prototype.Unzip = function (file) {
        return new Promise(function (resolve, reject) {
            msgc
                .invoke(QingCore_1.IoServiceName, IOEvents.UNZIP, {
                file: file,
            })
                .then(function (res) {
                var error = res.error, data = res.data;
                if (error) {
                    reject(error);
                    return;
                }
                resolve(data);
            });
        });
    };
    Object.defineProperty(QingCore.prototype, "WebServiceSdk", {
        /*******************************************************************************/
        /****************************** Web Service Api *****************************************/
        get: function () {
            return QingWebApiSdk.getInstance();
        },
        enumerable: false,
        configurable: true
    });
    /*******************************************************************************/
    QingCore.prototype.Destroy = function () {
        var observers = Array.from(this.observerMap.values());
        observers.forEach(function (observer) {
            observer.next(null);
            observer.complete();
        });
        _super.prototype.removeAllListeners.call(this);
        this.OffAll();
    };
    var QingCore_1;
    QingCore.IoServiceName = "io-service";
    QingCore = QingCore_1 = __decorate([
        Injectable({
            providedIn: "root",
        }),
        __metadata("design:paramtypes", [])
    ], QingCore);
    return QingCore;
}(PluginStore));
export { QingCore };
//# sourceMappingURL=qing-core.js.map