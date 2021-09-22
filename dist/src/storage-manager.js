var StorageManager = /** @class */ (function () {
    function StorageManager() {
    }
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
    return StorageManager;
}());
export { StorageManager };
//# sourceMappingURL=storage-manager.js.map