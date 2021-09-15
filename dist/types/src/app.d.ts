import { Plugin } from "src";
import { FileSystemManager } from "./file-system-manager";
import { ServiceManager } from "./service-manager";
import { State } from "./state";
import { Workspace } from "./workspace";
export declare class App {
    /**
     * App version, sync with package version
     */
    private version;
    workspace: Workspace;
    fileSystemManager: FileSystemManager;
    state: State;
    services: ServiceManager;
    constructor(version: string);
    private dependencyValid;
    /**
     * Install plugin, and check plugin dependencies has bee installed.
     * @param plugin - The plugin need installed.
     */
    installPlugin(plugin: Plugin): Promise<void>;
    /**
     * Activate plugin that has been installed.
     * @param {Plugin} plugin - The plugin need activate
     */
    activatePlugin(plugin: Plugin): void;
    /**
     * Deactivate plugin that has been installed.
     * @param {string} id - The plugin id need deactivate
     */
    deactivatePlugin(id: string): void;
}
