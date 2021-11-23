import { Component } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Plugin } from "./plugin";
/**
 * State contain installed plugin, registed variables and registed angular components.
 */
export declare class StateManager {
    private _plugins;
    private _variables;
    private _components;
    registerVariable(name: string, data?: any): void;
    unRegisterVariable(name: string): void;
    getVariable<T>(name: string): BehaviorSubject<T>;
    registerPlugin(plugin: Plugin): void;
    getPlugin(id: string): Plugin;
    registerComponent(name: string, component: Component): void;
    destroyComponent(name: string): void;
    getComponent(name: string): Component;
}
