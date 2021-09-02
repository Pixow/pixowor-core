var Plugin = /** @class */ (function () {
    function Plugin() {
    }
    Plugin.prototype.getPluginIdentify = function () {
        return this.name + "@" + this.version;
    };
    return Plugin;
}());
export { Plugin };
//# sourceMappingURL=plugin.js.map