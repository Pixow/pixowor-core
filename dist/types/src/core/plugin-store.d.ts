/// <reference types="node" />
import { EventEmitter } from "events";
import { BehaviorSubject } from "rxjs";
import { Plugin } from "./plugin";
declare type BindData = {
    [k: string]: any;
};
export declare class Event {
    name: string;
    data: BindData;
    constructor(name: string, data?: BindData);
}
export declare class PluginStore extends EventEmitter {
    private _functionArray;
    private _pluginMap;
    private _observerMap;
    constructor();
    get observerMap(): Map<string, BehaviorSubject<any>>;
    private dependencyValid;
    getInstalledPlugins(): Plugin[];
    prepare(plugin: Plugin): Promise<void>;
    activate(plugin: Plugin): void;
    deactivate(pluginName: string): void;
    addFunction(key: string, fn: any): void;
    execFunction(key: string, ...args: any): any;
    removeFunction(key: string): void;
    addEventListener<EventType = Event>(name: string, listener: (event: EventType) => void): void;
    addOnceEventListener<EventType = Event>(name: string, listener: (event: EventType) => void): void;
    removeEventListener<EventType = Event>(name: string, listener: (event: EventType) => void): void;
    dispatchEvent(event: Event): void;
    removeAllEvents(): void;
    registObserver(name: string, data?: any): void;
    getObserver(name: string): BehaviorSubject<any> | undefined;
}
export {};
