import { Plugin } from "./plugin";
import { FileSystemManager } from "./file-system-manager";
import { ServiceManager } from "./service-manager";
import { StateManager } from "./state-manager";
import { WorkspaceManager } from "./workspace-manager";
import { StorageManager } from "./storage-manager";
import PixowApi, { Area } from "pixow-api";
export declare type Settings = {
    lang: string;
    version: string;
    area: Area;
    production: boolean;
    environment: string;
    bucket: string;
    token: string;
    API_URL: string;
    WEB_RESOURCE_URI: string;
    TEST_GAME_CONFIG_IP_MOBILE: string;
    TEST_GAME_CONFIG_PORT_MOBILE: number;
    APP_DATA_PATH: string;
    USER_DATA_PATH: string;
    GAME_PROJECTS_PATH: string;
    TEMP_PATH: string;
    APP_PATH: string;
};
export interface FileConfig {
    file: string;
    filePath: string;
}
export declare class PixoworCore {
    /**
     * App version, sync with package version
     */
    private _version;
    /**
     * Record workspace data
     */
    workspace: WorkspaceManager;
    /**
     * Filesystem
     */
    fileSystem: FileSystemManager;
    /**
     * State manage data
     */
    state: StateManager;
    /**
     * Service manager
     */
    service: ServiceManager;
    /**
     * LocalStorage manager
     */
    storage: StorageManager;
    pixowApi: PixowApi;
    private _settings;
    /** Pixowor ipcMain process */
    private _ipcMain;
    /** Pixowor ipcRenderer process */
    private _ipcRenderer;
    constructor(settings: Settings);
    /**
     * Set pixow api token
     * @param token - Get token from signin api
     */
    setPixowApiToken(token: string): void;
    get settings(): Settings;
    get ipcMain(): any;
    set ipcMain(ipc: any);
    get ipcRenderer(): any;
    set ipcRenderer(ipc: any);
    get fileStorage(): any;
    set fileStorage(v: any);
    getEditingObject(key: string): any;
    setEditingObject(key: string, data: Object): void;
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
