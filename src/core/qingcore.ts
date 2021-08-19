import { EreMessageChannel as msgc } from "electron-re";
import { Event, IPlugin, PluginStore } from "angular-pluggable";
import {
  AlertEvent,
  IOOperates,
  LoadInDialogEvent,
  LoadInEditorAreaEvent,
  LoadInMenuEvent,
  LoadInPanelEvent,
  LoadInSidebarEvent,
  LoadInWidgetBarEvent,
  ToastEvent,
} from "./events";
import { Service } from "typedi";

export enum Severity {
  SUCCESS = "success",
  ERROR = "error",
  INFO = "info",
}

type MsgcResponse = {
  error: Error | null;
  data: any;
};

@Service()
export class QingCore extends PluginStore {
  private pluginVariables = new Map<string, string[]>();
  static IoServiceName: string = "io-service";

  constructor() {
    super();
  }

  /****************************** UI Api *****************************/

  public Toast(severity: Severity, message: string) {
    this.Emit(new ToastEvent(severity, message));
  }

  public Alert(message: string) {
    this.Emit(new AlertEvent(message));
  }

  public LoadInDialog(componentName: string) {
    this.Emit(new LoadInDialogEvent(componentName));
  }

  public LoadInMenu(componentName: string) {
    this.Emit(new LoadInMenuEvent(componentName));
  }

  public LoadInSidebar(componentName: string) {
    this.Emit(new LoadInSidebarEvent(componentName));
  }

  public LoadInEditorArea(componentName: string) {
    this.Emit(new LoadInEditorAreaEvent(componentName));
  }

  public LoadInPanel(componentName: string) {
    this.Emit(new LoadInPanelEvent(componentName));
  }

  public LoadInWidgetBar(componentName: string) {
    this.Emit(new LoadInWidgetBarEvent(componentName));
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
  /*******************************************************************************/

  /****************************** IO Api *****************************************/
  public ListDir(dir: string) {
    return new Promise((resolve, reject) => {
      msgc
        .invoke(QingCore.IoServiceName, IOOperates.LISTDIR, {
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
        .invoke(QingCore.IoServiceName, IOOperates.REMOVEDIR, { dir })
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
        .invoke(QingCore.IoServiceName, IOOperates.READFILE, {
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
        .invoke(QingCore.IoServiceName, IOOperates.WRITEFILE, {
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
        .invoke(QingCore.IoServiceName, IOOperates.REMOVEFILE, {
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
        .invoke(QingCore.IoServiceName, IOOperates.READJSON, {
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
        .invoke(QingCore.IoServiceName, IOOperates.WRITEJSON, {
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
        .invoke(QingCore.IoServiceName, IOOperates.DOWNLOADFILE, {
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
        .invoke(QingCore.IoServiceName, IOOperates.UPLOADFILE, {
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
        .invoke(QingCore.IoServiceName, IOOperates.COPYFILES, {
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
        .invoke(QingCore.IoServiceName, IOOperates.ZIPFILES, {
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
        .invoke(QingCore.IoServiceName, IOOperates.UNZIP, {
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

  public Destroy() {
    const observers = Array.from(this.observerMap.values());
    observers.forEach((observer) => {
      observer.next(null);
      observer.complete();
    });

    super.removeAllListeners();
  }
}
