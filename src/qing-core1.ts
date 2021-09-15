// import { MessageChannel as msgc } from "electron-re";
// import QingApi, {Area} from "qing-api";
// import { Component, Injectable, Type } from "@angular/core";
// import {
//   IOEvents,
//   RendererEvents,
//   RendererFunctions,
//   UIEvents,
// } from "./events";
// import { Event, PluginStore } from "./plugin-store";
// import { Plugin } from "./plugin";

// export enum Severity {
//   SUCCESS = "success",
//   ERROR = "error",
//   INFO = "info",
// }

// export type MsgcResponse = {
//   error: Error | null;
//   data: any;
// };

// export declare type Constructable<T> = new (...args: any[]) => T;

// export type Environment = {
//   production: boolean;
//   environment: string;
//   bucket: string;
//   API_URL: string;
//   WEB_RESOURCE_URI: string;
//   TEST_GAME_CONFIG_IP_MOBILE: string;
//   TEST_GAME_CONFIG_PORT_MOBILE: number;
//   APP_DATA_PATH: string;
//   USER_DATA_PATH: string;
//   TEMP_PATH: string;
//   APP_PATH: string;
// };

// export interface FileStat {
//   type: string;
//   path: string;
//   file: string;
//   files?: FileStat[];
// }

// @Injectable({
//   providedIn: "root",
// })
// export class QingCore {
//   static IoServiceName: string = "io-service";
//   private pluginVariables = new Map<string, string[]>();
//   private services = new Map<string, any>();
//   private environment: Environment;

//   constructor() {
//   }

//   /****************************** Environment Variables Api *****************************/
//   public set Environment(env: Environment) {
//     this.environment = env;
//   }

//   public get Environment(): Environment {
//     return this.environment;
//   }

//   /********************************** I18N *******************************/
//   public InstallI18n(translateObjs: { [k: string]: object }) {
//     return new Promise((resolve, reject) => {
//       msgc
//         .invoke(QingCore.IoServiceName, IOEvents.INSTALLI18N, { translateObjs })
//         .then((res: MsgcResponse) => {
//           const { error, data } = res;
//           if (error) {
//             reject(error);
//             return;
//           }

//           resolve(data);
//         });
//     });
//   }

//   // TODO: MOVE to qing
//   public SetDefaultLang(lang: string) {
//     msgc.invoke(QingCore.IoServiceName, IOEvents.SET_DEFAULT_LANG, {lang})
//   }

//   // TODO: MOVE to qing
//   public GetDefaultLang() {
//      return new Promise((resolve, reject) => {
//        msgc
//          .invoke(QingCore.IoServiceName, IOEvents.GET_DEFAULT_LANG, {})
//          .then((res: MsgcResponse) => {
//            const { error, data } = res;
//            if (error) {
//              reject(error);
//              return;
//            }

//            resolve(data);
//          });
//      });
//   }

//   /**
//    * 将angular的service实例注入
//    * @param service AngularService
//    * @param serviceInstance AngularService Instance
//    */
//   public InjectService<T>(service: Constructable<T>, serviceInstance: T) {
//     this.services.set(service.name, serviceInstance);
//   }

//   /**
//    * 获取某个Service实例
//    * @param service
//    */
//   public GetService<T>(service: Constructable<T>) {
//     return this.services.get((service as any).name) as T;
//   }


//   /****************************** UI Api *****************************/
//   public RegistComponent(componentName: string, component: Type<Component>) {
//     this.Invoke(RendererFunctions.REGIST_COMPONENT, componentName, component);
//   }

//   public GetComponent(componentName: string) {
//     this.Invoke(RendererFunctions.GET_COMPONENT, componentName);
//   }

//   public RegistPlacementComponents(
//     placement: string,
//     component: Type<Component>
//   ) {
//     this.Invoke(
//       RendererFunctions.REGIST_PLACEMENT_COMPONENTS,
//       placement,
//       component
//     );
//   }

//   public GetPlacementComponents(placement: string) {
//     this.Invoke(RendererFunctions.GET_PLACEMENT_COMPONENTS, placement);
//   }

//   public Toast(severity: Severity, message: string) {
//     this.Emit(new Event(UIEvents.TOAST, { severity, message }));
//   }

//   public Alert(message: string) {
//     this.Emit(new Event(UIEvents.ALERT, { message }));
//   }

//   public OpenDialog(componentName: string) {
//     this.Emit(new Event(UIEvents.OPEN_DIALOG, { componentName }));
//   }

//   public CloseDialog() {
//     this.Emit(new Event(UIEvents.CLOSE_DIALOG));
//   }

//   public ActivateInMenu(
//     col: number,
//     insertIndex: number,
//     label: string,
//     cb: Function
//   ) {
//     this.Emit(
//       new Event(UIEvents.ACTIVATE_IN_MENU, { col, insertIndex, label, cb })
//     );
//   }

//   public DeactivateInMenu(col: number, insertIndex: number) {
//     this.Emit(new Event(UIEvents.DEACTIVATE_IN_MENU, { col, insertIndex }));
//   }

//   public LoadInSidebar(componentName: string) {
//     this.Emit(new Event(UIEvents.LOAD_IN_SIDEBAR, { componentName }));
//   }

//   public LoadInEditorArea(componentName: string) {
//     this.Emit(new Event(UIEvents.LOAD_IN_EDITORAREA, { componentName }));
//   }

//   public LoadInConsolePanel(componentName: string) {
//     this.Emit(new Event(UIEvents.LOAD_IN_PANEL, { componentName }));
//   }

//   public LoadInWidgetBar(componentName: string) {
//     this.Emit(new Event(UIEvents.LOAD_IN_WIDGETBAR, { componentName }));
//   }

//   public RegistVariable(pluginName: string, varName: string, data: any) {
//     const variables = this.pluginVariables.get(pluginName);
//     if (typeof variables === "object" && variables.length > 0) {
//       if (variables.indexOf(varName) < 0) {
//         this.registObserver(varName, data);
//       }
//     } else {
//       this.pluginVariables.set(pluginName, [varName]);
//       this.registObserver(varName, data);
//     }
//   }

//   public GetVariable(varName: string) {
//     return this.getObserver(varName) as any;
//   }
//   /*******************************************************************************/

//   /****************************** Storage Api *****************************/
//   public Set(key: string, data: string | object) {
//     if (typeof data === "object") {
//       localStorage.setItem(key, JSON.stringify(data));
//     } else {
//       localStorage.setItem(key, data);
//     }
//   }

//   public Get(key: string) {
//     const data = localStorage.getItem(key);

//     if (!data) return null;

//     try {
//       return JSON.parse(data);
//     } catch (error) {
//       return data;
//     }
//   }

//   public Remove(key: string) {
//     localStorage.removeItem(key);
//   }
//   /*******************************************************************************/

//   /****************************** Event Listener Api *****************************/
//   public Emit(event: Event) {
//     this.dispatchEvent(event);
//   }

//   public On(eventName: string, listener: (event: Event) => void) {
//     this.addEventListener(eventName, listener);
//   }

//   public Once(eventName: string, listener: (event: Event) => void) {
//     this.addOnceEventListener(eventName, listener);
//   }

//   public Off(eventName: string, listener: (event: Event) => void) {
//     this.removeListener(eventName, listener);
//   }

//   public OffAll() {
//     this.removeAllEvents();
//   }
//   /*******************************************************************************/

//   public Invoke(funcName: string, ...args: any) {
//     return this.execFunction(funcName, ...args);
//   }

//   public Bind(funcName: string, fn: (...args: any) => void) {
//     this.addFunction(funcName, fn);
//   }

//   public UnBind(funcName: string) {
//     this.removeFunction(funcName);
//   }

//   /****************************** IO Api *****************************************/
//   public ListDir(dir: string): Promise<FileStat[]> {
//     return new Promise((resolve, reject) => {
//       msgc
//         .invoke(QingCore.IoServiceName, IOEvents.LISTDIR, {
//           dir,
//         })
//         .then((res: MsgcResponse) => {
//           const { error, data } = res;
//           if (error) {
//             reject(error);
//             return;
//           }

//           resolve(data);
//         });
//     });
//   }

//   public RemoveDir(dir: string) {
//     return new Promise((resolve, reject) => {
//       msgc
//         .invoke(QingCore.IoServiceName, IOEvents.REMOVEDIR, { dir })
//         .then((res: MsgcResponse) => {
//           const { error, data } = res;
//           if (error) {
//             reject(error);
//             return;
//           }

//           resolve(data);
//         });
//     });
//   }

//   public ReadFile(file: string) {
//     return new Promise((resolve, reject) => {
//       msgc
//         .invoke(QingCore.IoServiceName, IOEvents.READFILE, {
//           file,
//           options: { encoding: "utf8" },
//         })
//         .then((res: MsgcResponse) => {
//           const { error, data } = res;
//           if (error) {
//             reject(error);
//             return;
//           }

//           resolve(data);
//         });
//     });
//   }

//   public WriteFile(file: string, data: any) {
//     return new Promise((resolve, reject) => {
//       msgc
//         .invoke(QingCore.IoServiceName, IOEvents.WRITEFILE, {
//           file,
//           data,
//         })
//         .then((res: MsgcResponse) => {
//           const { error, data } = res;
//           if (error) {
//             reject(error);
//             return;
//           }

//           resolve(data);
//         });
//     });
//   }

//   public RemoveFile(file: string, data: any) {
//     return new Promise((resolve, reject) => {
//       msgc
//         .invoke(QingCore.IoServiceName, IOEvents.REMOVEFILE, {
//           file,
//           data,
//         })
//         .then((res: MsgcResponse) => {
//           const { error, data } = res;
//           if (error) {
//             reject(error);
//             return;
//           }

//           resolve(data);
//         });
//     });
//   }

//   public ReadJson(path: string) {
//     return new Promise((resolve, reject) => {
//       msgc
//         .invoke(QingCore.IoServiceName, IOEvents.READJSON, {
//           path,
//         })
//         .then((res: MsgcResponse) => {
//           const { error, data } = res;
//           if (error) {
//             reject(error);
//             return;
//           }

//           resolve(data);
//         });
//     });
//   }

//   public WriteJson(path: string, data: any) {
//     return new Promise((resolve, reject) => {
//       msgc
//         .invoke(QingCore.IoServiceName, IOEvents.WRITEJSON, {
//           path,
//           data,
//         })
//         .then((res: MsgcResponse) => {
//           const { error, data } = res;
//           if (error) {
//             reject(error);
//             return;
//           }

//           resolve(data);
//         });
//     });
//   }

//   public DownloadFile(url: string, output: string) {
//     return new Promise((resolve, reject) => {
//       msgc
//         .invoke(QingCore.IoServiceName, IOEvents.DOWNLOADFILE, {
//           url,
//           output,
//         })
//         .then((res: MsgcResponse) => {
//           const { error, data } = res;
//           if (error) {
//             reject(error);
//             return;
//           }

//           resolve(data);
//         });
//     });
//   }

//   public UploadFile(filePath: string, fileName: string) {
//     return new Promise(async (resolve, reject) => {
//       const qiniuTokenRes = await this.WebServiceSdk.util.getQiniuToken({
//         name: fileName,
//       });

//       const { token } = qiniuTokenRes.data;

//       msgc
//         .invoke(QingCore.IoServiceName, IOEvents.UPLOADFILE, {
//           filePath,
//           fileName,
//           token,
//         })
//         .then((res: MsgcResponse) => {
//           const { error, data } = res;
//           if (error) {
//             reject(error);
//             return;
//           }

//           resolve(data);
//         });
//     });
//   }

//   public UploadFiles(files: string[]) {
//     return new Promise((resolve, reject) => {});
//   }

//   public CopyFiles(source: string, dest: string) {
//     return new Promise((resolve, reject) => {
//       msgc
//         .invoke(QingCore.IoServiceName, IOEvents.COPYFILES, {
//           source,
//           dest,
//         })
//         .then((res: MsgcResponse) => {
//           const { error, data } = res;
//           if (error) {
//             reject(error);
//             return;
//           }

//           resolve(data);
//         });
//     });
//   }

//   public ZipFiles(files: FileStat[], folderName: string) {
//     return new Promise((resolve, reject) => {
//       msgc
//         .invoke(QingCore.IoServiceName, IOEvents.ZIPFILES, {
//           files,
//           folderName,
//         })
//         .then((res: MsgcResponse) => {
//           const { error, data } = res;
//           if (error) {
//             reject(error);
//             return;
//           }

//           resolve(data);
//         });
//     });
//   }

//   public Unzip(file: string) {
//     return new Promise((resolve, reject) => {
//       msgc
//         .invoke(QingCore.IoServiceName, IOEvents.UNZIP, {
//           file,
//         })
//         .then((res: MsgcResponse) => {
//           const { error, data } = res;
//           if (error) {
//             reject(error);
//             return;
//           }

//           resolve(data);
//         });
//     });
//   }

//   /*******************************************************************************/

//   /****************************** Web Service Api *****************************************/

//   // TODO: 区域变量
//   public get WebServiceSdk() {
//     return new QingApi({area: Area.CN})
//   }

//   public InitToken(token: string) {
//     this.WebServiceSdk.setToken(token);
//   }
//   /*******************************************************************************/

//   public Destroy() {
//     const observers = Array.from(this.observerMap.values());
//     observers.forEach((observer) => {
//       observer.next(null);
//       observer.complete();
//     });

//     super.removeAllListeners();

//     this.OffAll();
//   }
// }
