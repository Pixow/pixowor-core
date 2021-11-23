var StorageManager = /** @class */ (function () {
    function StorageManager() {
    }
    StorageManager.prototype.setFileStorage = function (v) {
        this._fileStorage = v;
    };
    StorageManager.prototype.getFileStorage = function () {
        return this._fileStorage;
    };
    StorageManager.prototype.set = function (key, data) {
        if (typeof data === "object") {
            localStorage.setItem(key, JSON.stringify(data));
        }
        else {
            localStorage.setItem(key, data);
        }
    };
    StorageManager.prototype.get = function (key) {
        var data = localStorage.getItem(key);
        if (!data)
            return null;
        try {
            return JSON.parse(data);
        }
        catch (error) {
            return data;
        }
    };
    StorageManager.prototype.remove = function (key) {
        localStorage.removeItem(key);
    };
    StorageManager.prototype.setObjectInJsonFile = function (fileName, key, data) {
        var _a;
        var ret = this._fileStorage.getSync(fileName);
        this._fileStorage.set(fileName, Object.assign(ret, (_a = {}, _a[key] = data, _a)));
    };
    StorageManager.prototype.getObjectFromJsonFile = function (fileName, key) {
        var ret = this._fileStorage.getSync(fileName);
        return ret[key];
    };
    return StorageManager;
}());
export { StorageManager };
//# sourceMappingURL=storage-manager.js.map