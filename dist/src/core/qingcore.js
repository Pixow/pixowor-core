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
import { EreMessageChannel as msgc } from "electron-re";
import { PluginStore } from "angular-pluggable";
import { AlertEvent, IOOperates, LoadInDialogEvent, LoadInEditorAreaEvent, LoadInMenuEvent, LoadInPanelEvent, LoadInSidebarEvent, LoadInWidgetBarEvent, ToastEvent, } from "./events";
import { Service } from "typedi";
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
        return _this;
    }
    QingCore_1 = QingCore;
    /****************************** UI Api *****************************/
    QingCore.prototype.Toast = function (severity, message) {
        this.Emit(new ToastEvent(severity, message));
    };
    QingCore.prototype.Alert = function (message) {
        this.Emit(new AlertEvent(message));
    };
    QingCore.prototype.LoadInDialog = function (componentName) {
        this.Emit(new LoadInDialogEvent(componentName));
    };
    QingCore.prototype.LoadInMenu = function (componentName) {
        this.Emit(new LoadInMenuEvent(componentName));
    };
    QingCore.prototype.LoadInSidebar = function (componentName) {
        this.Emit(new LoadInSidebarEvent(componentName));
    };
    QingCore.prototype.LoadInEditorArea = function (componentName) {
        this.Emit(new LoadInEditorAreaEvent(componentName));
    };
    QingCore.prototype.LoadInPanel = function (componentName) {
        this.Emit(new LoadInPanelEvent(componentName));
    };
    QingCore.prototype.LoadInWidgetBar = function (componentName) {
        this.Emit(new LoadInWidgetBarEvent(componentName));
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
    /*******************************************************************************/
    /****************************** IO Api *****************************************/
    QingCore.prototype.ListDir = function (dir) {
        return new Promise(function (resolve, reject) {
            msgc
                .invoke(QingCore_1.IoServiceName, IOOperates.LISTDIR, {
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
                .invoke(QingCore_1.IoServiceName, IOOperates.REMOVEDIR, { dir: dir })
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
                .invoke(QingCore_1.IoServiceName, IOOperates.READFILE, {
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
                .invoke(QingCore_1.IoServiceName, IOOperates.WRITEFILE, {
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
                .invoke(QingCore_1.IoServiceName, IOOperates.REMOVEFILE, {
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
                .invoke(QingCore_1.IoServiceName, IOOperates.READJSON, {
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
                .invoke(QingCore_1.IoServiceName, IOOperates.WRITEJSON, {
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
                .invoke(QingCore_1.IoServiceName, IOOperates.DOWNLOADFILE, {
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
                .invoke(QingCore_1.IoServiceName, IOOperates.UPLOADFILE, {
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
                .invoke(QingCore_1.IoServiceName, IOOperates.COPYFILES, {
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
                .invoke(QingCore_1.IoServiceName, IOOperates.ZIPFILES, {
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
                .invoke(QingCore_1.IoServiceName, IOOperates.UNZIP, {
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
    /*******************************************************************************/
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
    QingCore.prototype.Destroy = function () {
        var observers = Array.from(this.observerMap.values());
        observers.forEach(function (observer) {
            observer.next(null);
            observer.complete();
        });
        _super.prototype.removeAllListeners.call(this);
    };
    var QingCore_1;
    QingCore.IoServiceName = "io-service";
    QingCore = QingCore_1 = __decorate([
        Service(),
        __metadata("design:paramtypes", [])
    ], QingCore);
    return QingCore;
}(PluginStore));
export { QingCore };
//# sourceMappingURL=qingcore.js.map