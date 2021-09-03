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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import { MessageChannel as msgc } from "electron-re";
import { QingWebApiSdk } from "qing-web-api-sdk";
import { Injectable } from "@angular/core";
import { IOEvents, RendererFunctions, UIEvents, } from "./events";
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
    Object.defineProperty(QingCore.prototype, "Environment", {
        get: function () {
            return this.environment;
        },
        /****************************** Environment Variables Api *****************************/
        set: function (env) {
            this.environment = env;
        },
        enumerable: false,
        configurable: true
    });
    /********************************** I18N *******************************/
    QingCore.prototype.InstallI18n = function (translateObjs) {
        return new Promise(function (resolve, reject) {
            msgc
                .invoke(QingCore_1.IoServiceName, IOEvents.INSTALLI18N, { translateObjs: translateObjs })
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
    QingCore.prototype.RegistComponent = function (componentName, component) {
        this.Invoke(RendererFunctions.REGIST_COMPONENT, componentName, component);
    };
    QingCore.prototype.GetComponent = function (componentName) {
        this.Invoke(RendererFunctions.GET_COMPONENT, componentName);
    };
    QingCore.prototype.RegistPlacementComponents = function (placement, component) {
        this.Invoke(RendererFunctions.REGIST_PLACEMENT_COMPONENTS, placement, component);
    };
    QingCore.prototype.GetPlacementComponents = function (placement) {
        this.Invoke(RendererFunctions.GET_PLACEMENT_COMPONENTS, placement);
    };
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
    QingCore.prototype.ActivateInMenu = function (col, insertIndex, label, cb) {
        this.Emit(new Event(UIEvents.ACTIVATE_IN_MENU, { col: col, insertIndex: insertIndex, label: label, cb: cb }));
    };
    QingCore.prototype.DeactivateInMenu = function (col, insertIndex) {
        this.Emit(new Event(UIEvents.DEACTIVATE_IN_MENU, { col: col, insertIndex: insertIndex }));
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
    QingCore.prototype.UploadFile = function (filePath, fileName) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var qiniuTokenRes, token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.WebServiceSdk.util.getQiniuToken({
                            name: fileName,
                        })];
                    case 1:
                        qiniuTokenRes = _a.sent();
                        token = qiniuTokenRes.data.token;
                        msgc
                            .invoke(QingCore_1.IoServiceName, IOEvents.UPLOADFILE, {
                            filePath: filePath,
                            fileName: fileName,
                            token: token,
                        })
                            .then(function (res) {
                            var error = res.error, data = res.data;
                            if (error) {
                                reject(error);
                                return;
                            }
                            resolve(data);
                        });
                        return [2 /*return*/];
                }
            });
        }); });
    };
    QingCore.prototype.UploadFiles = function (files) {
        return new Promise(function (resolve, reject) { });
    };
    QingCore.prototype.CopyFiles = function (source, dest) {
        return new Promise(function (resolve, reject) {
            msgc
                .invoke(QingCore_1.IoServiceName, IOEvents.COPYFILES, {
                source: source,
                dest: dest,
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
    QingCore.prototype.ZipFiles = function (files, folderName) {
        return new Promise(function (resolve, reject) {
            msgc
                .invoke(QingCore_1.IoServiceName, IOEvents.ZIPFILES, {
                files: files,
                folderName: folderName,
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
    QingCore.prototype.InitToken = function (token) {
        this.WebServiceSdk.setToken(token);
    };
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