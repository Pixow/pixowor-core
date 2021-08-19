import { Event } from "angular-pluggable";
import { Severity } from "./qingcore";
export declare class ToastEvent extends Event {
    constructor(severity: Severity, message: string);
}
export declare class AlertEvent extends Event {
    constructor(message: string);
}
export declare class LoadInDialogEvent extends Event {
    constructor(componentName: string);
}
export declare class LoadInMenuEvent extends Event {
    constructor(componentName: string);
}
export declare class LoadInSidebarEvent extends Event {
    constructor(componentName: string);
}
export declare class LoadInEditorAreaEvent extends Event {
    constructor(componentName: string);
}
export declare class LoadInPanelEvent extends Event {
    constructor(componentName: string);
}
export declare class LoadInWidgetBarEvent extends Event {
    constructor(componentName: string);
}
export declare enum IOOperates {
    LISTDIR = "list-dir",
    REMOVEDIR = "remove-dir",
    READFILE = "read-file",
    WRITEFILE = "write-file",
    REMOVEFILE = "remove-file",
    READJSON = "read-json",
    WRITEJSON = "write-json",
    DOWNLOADFILE = "download-file",
    UPLOADFILE = "upload-file",
    COPYFILES = "copy-files",
    ZIPFILES = "zip-files",
    UNZIP = "unzip"
}
