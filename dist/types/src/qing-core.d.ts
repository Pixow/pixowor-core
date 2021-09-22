import { Plugin } from "./plugin";
import { FileSystemManager } from "./file-system-manager";
import { ServiceManager } from "./service-manager";
import { StateManager } from "./state-manager";
import { WorkspaceManager } from "./workspace-manager";
import { StorageManager } from "./storage-manager";
import QingApi, { Area } from "qing-api";
export declare type Env = {
    area: Area;
    production: boolean;
    environment: string;
    bucket: string;
    API_URL: string;
    WEB_RESOURCE_URI: string;
    TEST_GAME_CONFIG_IP_MOBILE: string;
    TEST_GAME_CONFIG_PORT_MOBILE: number;
    APP_DATA_PATH: string;
    USER_DATA_PATH: string;
    TEMP_PATH: string;
    APP_PATH: string;
};
export declare class QingCore {
    /**
     * App version, sync with package version
     */
    private version;
    /**
     * Record workspace data
     */
    workspace: WorkspaceManager;
    /**
     * Filesystem
     */
    fileSystemManager: FileSystemManager;
    /**
     * State manage data
     */
    stateManager: StateManager;
    /**
     * Service manager
     */
    serviceManager: ServiceManager;
    /**
     * LocalStorage manager
     */
    storageManager: StorageManager;
    qingApi: QingApi;
    private _environment;
    constructor(version: string, env: Env);
    /**
     * Set qing api token
     * @param token - Get token from signin api
     */
    setQingApiToken(token: string): void;
    get environment(): Env;
    private dependencyValid;
    /**
     * Install plugin, and check plugin dependencies has bee installed.
     * @param plugin - The plugin need installed.
     */
    installPlugin(plugin: Plugin): Promise<void>;
    /**
     * Activate plugin that has been installed.
     * @param plugins - The plugin need activate
     */
    activatePlugins(plugins: Plugin[]): void;
    /**
     * Deactivate plugin that has been installed.
     * @param {string} pid - The plugin id need deactivate
     */
    deactivatePlugin(pid: string): void;
}
