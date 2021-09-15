import { Component } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Plugin } from "src";
/**
 * State contain installed plugin, registed variables and registed angular components.
 */
export declare class State {
    private _plugins;
    private _variables;
    private _components;
    registerVariable(name: string, data?: any): void;
    getVariable(name: string): BehaviorSubject<any>;
    registerPlugin(plugin: Plugin): void;
    getPlugin(id: string): Plugin;
    registerComponent(component: Component): void;
    getComponent(name: string): Component;
}
