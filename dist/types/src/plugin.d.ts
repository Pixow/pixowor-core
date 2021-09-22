import { Component } from "@angular/core";
import { Severity } from "./workspace-manager";
import { QingCore } from "./qing-core";
/**
 * Mod = Cmd on MacOS and Ctrl on other OS
 * Ctrl = Ctrl key for every OS
 * Meta = Cmd on MacOS and Win key on other OS
 * @public
 */
export declare type Modifier = "Mod" | "Ctrl" | "Meta" | "Shift" | "Alt";
export interface Hotkey {
    modifiers: Modifier[];
    key: string;
}
export interface Command {
    /**
     * Globally unique ID to identify this command
     */
    id: string;
    /**
     * Human friendly name for searching
     */
    name: string;
    /**
     * Simple callback, triggered globally
     */
    callback?: () => any;
    hotkeys?: Hotkey[];
}
export interface PluginManifest {
    pid: string;
    name: string;
    author: string;
    version: string;
    description: string;
    minAppVersion: string;
    authorUrl?: string;
    dependencies?: {
        [k: string]: string;
    };
}
export declare abstract class Plugin {
    private _qingCore;
    pid: string;
    name: string;
    author: string;
    version: string;
    description: string;
    minAppVersion: string;
    authorUrl?: string;
    dependencies?: {
        [k: string]: string;
    };
    constructor(qingCore: QingCore, manifest: PluginManifest);
    install(): Promise<void>;
    abstract activate(): void;
    abstract deactivate(): void;
    /**
     * Get qing core
     */
    get qingCore(): QingCore;
    colorLog(message: string): void;
    /**
     * Register a command globally. The command id and name will be automatically prefixed with this plugin's id and name.
     * @param command Command
     */
    addCommand(command: Command): void;
    /**
     *
     * @param {string} label - Menu label
     * @param {Function} callback - The callback to trigger
     */
    addMenu(label: string, callback: Function): void;
    /**
     * Regist angular component for use.
     * @param  {string} name - Component
     * @param  {Component} component - Register a angular component. The function will use component classname as key to regist.
     */
    registerComponent(name: string, component: Component): void;
    /**
     * UnRegister angular component that registed.
     * @param name - Component name
     */
    unRrgisterComponent(name: string): void;
    /**
     * Regist variable
     * @param name - variable name
     * @param data - variable init data
     */
    registerVariable(name: string, data?: any): void;
    /**
     * UnRegister variable
     * @param name - variable name
     */
    unRegisterVariable(name: string): void;
    /**
     * Toast message
     * @param {Severity} severity - Message severity.
     * @param {string} message - Toast message.
     */
    toast(severity: Severity, message: string): void;
    alert(message: string): void;
    /**
     * Open a component you registed in a dialog.
     * @param {string} componentName - Component name.
     */
    openDialog(componentName: string): void;
    /**
     * Get value from localstorage
     * @param key localstorage key
     * @returns
     */
    get(key: string): any;
}
