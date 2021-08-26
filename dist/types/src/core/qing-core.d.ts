import { QingWebApiSdk } from "qing-web-api-sdk";
import { Event, PluginStore } from "./plugin-store";
import { Plugin } from "./plugin";
export declare enum Severity {
    SUCCESS = "success",
    ERROR = "error",
    INFO = "info"
}
export declare type MsgcResponse = {
    error: Error | null;
    data: any;
};
export declare type Constructable<T> = new (...args: any[]) => T;
export declare class QingCore extends PluginStore {
    static IoServiceName: string;
    private pluginVariables;
    private services;
    constructor();
    /**
     * 将angular的service实例注入
     * @param service AngularService
     * @param serviceInstance AngularService Instance
     */
    InjectService<T>(service: Constructable<T>, serviceInstance: T): void;
    /**
     * 获取某个Service实例
     * @param service
     */
    GetService<T>(service: Constructable<T>): T;
    /****************************** Plugin Api *****************************/
    InstallPlugin(plugin: Plugin): void;
    UninstallPlugin(pluginName: string): void;
    EnablePlugin(pluginName: string, pluginConfig: {
        [k: string]: any;
    }): void;
    DisablePlugin(pluginName: string): void;
    /*******************************************************************************/
    /****************************** UI Api *****************************/
    Toast(severity: Severity, message: string): void;
    Alert(message: string): void;
    OpenDialog(componentName: string): void;
    CloseDialog(): void;
    LoadInMenu(componentName: string): void;
    LoadInSidebar(componentName: string): void;
    LoadInEditorArea(componentName: string): void;
    LoadInConsolePanel(componentName: string): void;
    LoadInWidgetBar(componentName: string): void;
    RegistVariable(pluginName: string, varName: string, data: any): void;
    GetVariable(varName: string): any;
    /*******************************************************************************/
    /****************************** Storage Api *****************************/
    Set(key: string, data: string | object): void;
    Get(key: string): any;
    Remove(key: string): void;
    /*******************************************************************************/
    /****************************** Event Listener Api *****************************/
    Emit(event: Event): void;
    On(eventName: string, listener: (event: Event) => void): void;
    Once(eventName: string, listener: (event: Event) => void): void;
    Off(eventName: string, listener: (event: Event) => void): void;
    OffAll(): void;
    /*******************************************************************************/
    Invoke(funcName: string, ...args: any): any;
    Bind(funcName: string, fn: (...args: any) => void): void;
    UnBind(funcName: string): void;
    /****************************** IO Api *****************************************/
    ListDir(dir: string): Promise<unknown>;
    RemoveDir(dir: string): Promise<unknown>;
    ReadFile(file: string): Promise<unknown>;
    WriteFile(file: string, data: any): Promise<unknown>;
    RemoveFile(file: string, data: any): Promise<unknown>;
    ReadJson(path: string): Promise<unknown>;
    WriteJson(path: string, data: string): Promise<unknown>;
    DownloadFile(url: string, output: string): Promise<unknown>;
    UploadFile(file: string): Promise<unknown>;
    CopyFiles(source: string, dest: string): Promise<unknown>;
    ZipFiles(files: string): Promise<unknown>;
    Unzip(file: string): Promise<unknown>;
    /*******************************************************************************/
    /****************************** Web Service Api *****************************************/
    get WebServiceSdk(): QingWebApiSdk;
    /*******************************************************************************/
    Destroy(): void;
}
