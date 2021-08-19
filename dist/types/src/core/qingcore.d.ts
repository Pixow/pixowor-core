import { Event, PluginStore } from "angular-pluggable";
export declare enum Severity {
    SUCCESS = "success",
    ERROR = "error",
    INFO = "info"
}
export declare class QingCore extends PluginStore {
    private pluginVariables;
    static IoServiceName: string;
    constructor();
    /****************************** UI Api *****************************/
    Toast(severity: Severity, message: string): void;
    Alert(message: string): void;
    LoadInDialog(componentName: string): void;
    LoadInMenu(componentName: string): void;
    LoadInSidebar(componentName: string): void;
    LoadInEditorArea(componentName: string): void;
    LoadInPanel(componentName: string): void;
    LoadInWidgetBar(componentName: string): void;
    RegistVariable(pluginName: string, varName: string, data: any): void;
    GetVariable(varName: string): any;
    /*******************************************************************************/
    /****************************** Event Listener Api *****************************/
    Emit(event: Event): void;
    On(eventName: string, listener: (event: Event) => void): void;
    Once(eventName: string, listener: (event: Event) => void): void;
    /*******************************************************************************/
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
    CopyFiles(files: string): Promise<unknown>;
    ZipFiles(files: string): Promise<unknown>;
    Unzip(file: string): Promise<unknown>;
    /*******************************************************************************/
    EnablePlugin(pluginName: string, pluginConfig: {
        [k: string]: any;
    }): void;
    DisablePlugin(pluginName: string): void;
    Destroy(): void;
}
