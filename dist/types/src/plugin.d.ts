import { Component } from "@angular/core";
import { App } from "./app";
export interface PluginManifest {
    id: string;
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
export declare enum Severity {
    SUCCESS = "success",
    ERROR = "error",
    INFO = "info"
}
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
export declare abstract class Plugin {
    app: App;
    manifest: PluginManifest;
    constructor(app: App, manifest: PluginManifest);
    abstract install(): Promise<any>;
    abstract activate(): void;
    abstract deactivate(): void;
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
     *
     * @param  {string} name - Component
     * @param  {Component} component - Register a angular component. The function will use component classname as key to regist.
     */
    registerComponent(component: Component): void;
    /**
     *
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
}
