import { QingWebApiSdk } from "qing-web-api-sdk";
import { Component, Type } from "@angular/core";
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
export declare type Environment = {
    production: boolean;
    environment: string;
    bucket: string;
    API_URL: string;
    WEB_RESOURCE_URI: string;
    TEST_GAME_CONFIG_IP_MOBILE: string;
    TEST_GAME_CONFIG_PORT_MOBILE: number;
    APP_DATA_PATH: string;
    USER_DATA_PATH: string;
    TEMP_PATH: string;
    APP_PATH: String;
};
export interface FileStat {
    type: string;
    path: string;
    file: string;
    files?: FileStat[];
}
export declare class QingCore extends PluginStore {
    static IoServiceName: string;
    private pluginVariables;
    private services;
    private environment;
    constructor();
    /****************************** Environment Variables Api *****************************/
    set Environment(env: Environment);
    get Environment(): Environment;
    /********************************** I18N *******************************/
    InstallI18n(translateObjs: {
        [k: string]: object;
    }): Promise<unknown>;
    SetDefaultLang(lang: string): void;
    GetDefaultLang(): Promise<unknown>;
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
    PreparePlugins(plugins: Plugin[]): Promise<any>;
    DeactivatePlugin(pluginNames: string[]): void;
    ActivatePlugins(plugins: Plugin[]): void;
    DisablePlugin(pluginName: string): void;
    /*******************************************************************************/
    /****************************** UI Api *****************************/
    RegistComponent(componentName: string, component: Type<Component>): void;
    GetComponent(componentName: string): void;
    RegistPlacementComponents(placement: string, component: Type<Component>): void;
    GetPlacementComponents(placement: string): void;
    Toast(severity: Severity, message: string): void;
    Alert(message: string): void;
    OpenDialog(componentName: string): void;
    CloseDialog(): void;
    ActivateInMenu(col: number, insertIndex: number, label: string, cb: Function): void;
    DeactivateInMenu(col: number, insertIndex: number): void;
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
    ListDir(dir: string): Promise<FileStat[]>;
    RemoveDir(dir: string): Promise<unknown>;
    ReadFile(file: string): Promise<unknown>;
    WriteFile(file: string, data: any): Promise<unknown>;
    RemoveFile(file: string, data: any): Promise<unknown>;
    ReadJson(path: string): Promise<unknown>;
    WriteJson(path: string, data: any): Promise<unknown>;
    DownloadFile(url: string, output: string): Promise<unknown>;
    UploadFile(filePath: string, fileName: string): Promise<unknown>;
    UploadFiles(files: string[]): Promise<unknown>;
    CopyFiles(source: string, dest: string): Promise<unknown>;
    ZipFiles(files: FileStat[], folderName: string): Promise<unknown>;
    Unzip(file: string): Promise<unknown>;
    /*******************************************************************************/
    /****************************** Web Service Api *****************************************/
    get WebServiceSdk(): QingWebApiSdk;
    InitToken(token: string): void;
    /*******************************************************************************/
    Destroy(): void;
}
