import { EreMessageChannel as msgc } from "electron-re";
import { QingWebApiSdk } from "qing-web-api-sdk";
import { Injectable } from "@angular/core";
import { IOEvents, UIEvents } from "./events";
import { Event, PluginStore } from "./plugin-store";
import { Plugin } from "./plugin";


export enum Severity {
  SUCCESS = "success",
  ERROR = "error",
  INFO = "info",
}

export type MsgcResponse = {
  error: Error | null;
  data: any;
};

export declare type Constructable<T> = new (...args: any[]) => T;

@Injectable({
  providedIn: "root",
})
export class QingCore extends PluginStore {
  static IoServiceName: string = "io-service";
  private pluginVariables = new Map<string, string[]>();
  private services = new Map<string, any>();

  constructor() {
    super();
  }

  /**
   * 将angular的service实例注入
   * @param service AngularService
   * @param serviceInstance AngularService Instance
   */
  public InjectService<T>(service: Constructable<T>, serviceInstance: T) {
    this.services.set(service.name, serviceInstance);
  }

  /**
   * 获取某个Service实例
   * @param service 
   */
  public GetService<T>(service: Constructable<T>) {
    return this.services.get((service as any).name) as T;
  }

  /****************************** Plugin Api *****************************/

  public InstallPlugin(plugin: Plugin) {
    this.install(plugin);
  }

  public UninstallPlugin(pluginName: string) {
    this.uninstall(pluginName);
  }

  public EnablePlugin(pluginName: string, pluginConfig: { [k: string]: any }) {}

  public DisablePlugin(pluginName: string) {
    const variables = this.pluginVariables.get(pluginName);

    if (variables && variables.length > 0) {
      const observers = variables.map((varName) =>
        this.observerMap.get(varName)
      );

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

  public Toast(severity: Severity, message: string) {
    this.Emit(new Event(UIEvents.TOAST, { severity, message }));
  }

  public Alert(message: string) {
    this.Emit(new Event(UIEvents.ALERT, { message }));
  }

  public OpenDialog(componentName: string) {
    this.Emit(new Event(UIEvents.OPEN_DIALOG, { componentName }));
  }

  public CloseDialog() {
    this.Emit(new Event(UIEvents.CLOSE_DIALOG));
  }

  public LoadInMenu(componentName: string) {
    this.Emit(new Event(UIEvents.LOAD_IN_MENU, { componentName }));
  }

  public LoadInSidebar(componentName: string) {
    this.Emit(new Event(UIEvents.LOAD_IN_SIDEBAR, { componentName }));
  }

  public LoadInEditorArea(componentName: string) {
    this.Emit(new Event(UIEvents.LOAD_IN_EDITORAREA, { componentName }));
  }

  public LoadInConsolePanel(componentName: string) {
    this.Emit(new Event(UIEvents.LOAD_IN_PANEL, { componentName }));
  }

  public LoadInWidgetBar(componentName: string) {
    this.Emit(new Event(UIEvents.LOAD_IN_WIDGETBAR, { componentName }));
  }

  public RegistVariable(pluginName: string, varName: string, data: any) {
    const variables = this.pluginVariables.get(pluginName);
    if (typeof variables === "object" && variables.length > 0) {
      if (variables.indexOf(varName) < 0) {
        this.registObserver(varName, data);
      }
    } else {
      this.pluginVariables.set(pluginName, [varName]);
      this.registObserver(varName, data);
    }
  }

  public GetVariable(varName: string) {
    return this.getObserver(varName) as any;
  }
  /*******************************************************************************/

  /****************************** Storage Api *****************************/
  public Set(key: string, data: string | object) {
    if (typeof data === "object") {
      localStorage.setItem(key, JSON.stringify(data));
    } else {
      localStorage.setItem(key, data);
    }
  }

  public Get(key: string) {
    const data = localStorage.getItem(key);

    if (!data) return null;

    try {
      return JSON.parse(data);
    } catch (error) {
      return data;
    }
  }

  public Remove(key: string) {
    localStorage.removeItem(key);
  }
  /*******************************************************************************/

  /****************************** Event Listener Api *****************************/
  public Emit(event: Event) {
    this.dispatchEvent(event);
  }

  public On(eventName: string, listener: (event: Event) => void) {
    this.addEventListener(eventName, listener);
  }

  public Once(eventName: string, listener: (event: Event) => void) {
    this.addOnceEventListener(eventName, listener);
  }

  public Off(eventName: string, listener: (event: Event) => void) {
    this.removeListener(eventName, listener)
  }

  public OffAll() {
    this.removeAllEvents()
  }
  /*******************************************************************************/

  public Invoke(funcName: string, ...args: any) {
    return this.execFunction(funcName, ...args);
  }

  public Bind(funcName: string, fn: (...args: any) => void) {
    this.addFunction(funcName, fn);
  }

  public UnBind(funcName: string) {
    this.removeFunction(funcName);
  }

  /****************************** IO Api *****************************************/
  public ListDir(dir: string) {
    return new Promise((resolve, reject) => {
      msgc
        .invoke(QingCore.IoServiceName, IOEvents.LISTDIR, {
          dir,
        })
        .then((res: MsgcResponse) => {
          const { error, data } = res;
          if (error) {
            reject(error);
            return;
          }

          resolve(data);
        });
    });
  }

  public RemoveDir(dir: string) {
    return new Promise((resolve, reject) => {
      msgc
        .invoke(QingCore.IoServiceName, IOEvents.REMOVEDIR, { dir })
        .then((res: MsgcResponse) => {
          const { error, data } = res;
          if (error) {
            reject(error);
            return;
          }

          resolve(data);
        });
    });
  }

  public ReadFile(file: string) {
    return new Promise((resolve, reject) => {
      msgc
        .invoke(QingCore.IoServiceName, IOEvents.READFILE, {
          file,
          options: { encoding: "utf8" },
        })
        .then((res: MsgcResponse) => {
          const { error, data } = res;
          if (error) {
            reject(error);
            return;
          }

          resolve(data);
        });
    });
  }

  public WriteFile(file: string, data: any) {
    return new Promise((resolve, reject) => {
      msgc
        .invoke(QingCore.IoServiceName, IOEvents.WRITEFILE, {
          file,
          data,
        })
        .then((res: MsgcResponse) => {
          const { error, data } = res;
          if (error) {
            reject(error);
            return;
          }

          resolve(data);
        });
    });
  }

  public RemoveFile(file: string, data: any) {
    return new Promise((resolve, reject) => {
      msgc
        .invoke(QingCore.IoServiceName, IOEvents.REMOVEFILE, {
          file,
          data,
        })
        .then((res: MsgcResponse) => {
          const { error, data } = res;
          if (error) {
            reject(error);
            return;
          }

          resolve(data);
        });
    });
  }

  public ReadJson(path: string) {
    return new Promise((resolve, reject) => {
      msgc
        .invoke(QingCore.IoServiceName, IOEvents.READJSON, {
          path,
        })
        .then((res: MsgcResponse) => {
          const { error, data } = res;
          if (error) {
            reject(error);
            return;
          }

          resolve(data);
        });
    });
  }

  public WriteJson(path: string, data: string) {
    return new Promise((resolve, reject) => {
      msgc
        .invoke(QingCore.IoServiceName, IOEvents.WRITEJSON, {
          path,
          data,
        })
        .then((res: MsgcResponse) => {
          const { error, data } = res;
          if (error) {
            reject(error);
            return;
          }

          resolve(data);
        });
    });
  }

  public DownloadFile(url: string, output: string) {
    return new Promise((resolve, reject) => {
      msgc
        .invoke(QingCore.IoServiceName, IOEvents.DOWNLOADFILE, {
          url,
          output,
        })
        .then((res: MsgcResponse) => {
          const { error, data } = res;
          if (error) {
            reject(error);
            return;
          }

          resolve(data);
        });
    });
  }

  public UploadFile(file: string) {
    return new Promise((resolve, reject) => {
      msgc
        .invoke(QingCore.IoServiceName, IOEvents.UPLOADFILE, {
          file,
        })
        .then((res: MsgcResponse) => {
          const { error, data } = res;
          if (error) {
            reject(error);
            return;
          }

          resolve(data);
        });
    });
  }

  public CopyFiles(files: string) {
    return new Promise((resolve, reject) => {
      msgc
        .invoke(QingCore.IoServiceName, IOEvents.COPYFILES, {
          files,
        })
        .then((res: MsgcResponse) => {
          const { error, data } = res;
          if (error) {
            reject(error);
            return;
          }

          resolve(data);
        });
    });
  }

  public ZipFiles(files: string) {
    return new Promise((resolve, reject) => {
      msgc
        .invoke(QingCore.IoServiceName, IOEvents.ZIPFILES, {
          files,
        })
        .then((res: MsgcResponse) => {
          const { error, data } = res;
          if (error) {
            reject(error);
            return;
          }

          resolve(data);
        });
    });
  }

  public Unzip(file: string) {
    return new Promise((resolve, reject) => {
      msgc
        .invoke(QingCore.IoServiceName, IOEvents.UNZIP, {
          file,
        })
        .then((res: MsgcResponse) => {
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

  public get WebServiceSdk() {
    return QingWebApiSdk.getInstance();
  }
  /*******************************************************************************/

  public Destroy() {
    const observers = Array.from(this.observerMap.values());
    observers.forEach((observer) => {
      observer.next(null);
      observer.complete();
    });

    super.removeAllListeners();

    this.OffAll()
  }
}
