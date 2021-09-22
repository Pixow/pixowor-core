import { Command } from "./plugin";
export declare type Constructable<T> = new (...args: any[]) => T;
/**
 * Service Manager contain some angular component service and global command service.
 */
export declare class ServiceManager {
    private services;
    private commands;
    injectService<T>(service: Constructable<T>, serviceInstance: T): void;
    getService<T>(service: Constructable<T>): T;
    registCommand(command: Command): void;
}
