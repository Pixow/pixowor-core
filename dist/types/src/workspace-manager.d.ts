/// <reference types="node" />
import { Component, Type } from "@angular/core";
import EventEmitter from "events";
export declare enum Severity {
    SUCCESS = "success",
    ERROR = "error",
    INFO = "info"
}
export declare enum Placements {
    MENUBAR = "menubar",
    SIDEBAR = "sidebar",
    EDITORAREA = "editor-area",
    WIDGETBAR = "widgetbar",
    STATUSBAR = "statusbar",
    TOAST = "toast"
}
export declare class WorkspaceSidedock {
}
export declare class WorkspaceRibbon {
}
export declare class WorkspaceSplit {
}
export declare class WorkspaceManager extends EventEmitter {
    private _slots;
    leftSplit: WorkspaceSidedock;
    rightSplit: WorkspaceSidedock;
    leftRibbon: WorkspaceRibbon;
    rightRibbon: WorkspaceRibbon;
    rootSplit: WorkspaceSplit;
    constructor();
    changeLayout(): Promise<void>;
    /**
     * Regist component in a slot
     * @param placement - Placement name
     * @param component - Slot component
     */
    registerSlotComponent(placement: string, component: Type<Component>): void;
    /**
     * Get a slot component
     * @param placement - Placement name
     * @returns
     */
    getSlotComponent(placement: string): Type<Component>;
    /**
     * Toast message
     * @param severity - Message severity.
     * @param message - Toast message.
     */
    toast(severity: Severity, message: string): void;
    /**
     * Alert message
     * @param severity - Message severity.
     * @param message - Toast message.
     */
    alert(message: string): void;
    /**
     * Open a registed component in a dialog.
     * @param componentName - Component name.
     * @param config - Config data.
     */
    openDialog(componentName: string, config?: {
        [k: string]: any;
    }): void;
}
