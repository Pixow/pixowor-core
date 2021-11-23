export class StorageManager {
  /** Pixowor JSON File Storage By electron-json-storage */
  private _fileStorage: any;

  setFileStorage(v: any) {
    this._fileStorage = v;
  }

  getFileStorage() {
    return this._fileStorage;
  }

  public set(key: string, data: string | object) {
    if (typeof data === "object") {
      localStorage.setItem(key, JSON.stringify(data));
    } else {
      localStorage.setItem(key, data);
    }
  }
  public get(key: string) {
    const data = localStorage.getItem(key);
    if (!data) return null;
    try {
      return JSON.parse(data);
    } catch (error) {
      return data;
    }
  }
  public remove(key: string) {
    localStorage.removeItem(key);
  }

  public setObjectInJsonFile(fileName: string, key: string, data: Object) {
    const ret = this._fileStorage.getSync(fileName);
    this._fileStorage.set(fileName, Object.assign(ret, { [key]: data }))
  }

  public getObjectFromJsonFile(fileName: string, key: string) {
    const ret = this._fileStorage.getSync(fileName);
    return ret[key];
  }
}