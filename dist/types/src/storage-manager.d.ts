export declare class StorageManager {
    /** Pixowor JSON File Storage By electron-json-storage */
    private _fileStorage;
    setFileStorage(v: any): void;
    getFileStorage(): any;
    set(key: string, data: string | object): void;
    get(key: string): any;
    remove(key: string): void;
    setObjectInJsonFile(fileName: string, key: string, data: Object): void;
    getObjectFromJsonFile(fileName: string, key: string): any;
}
