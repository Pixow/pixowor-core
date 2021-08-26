(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Plugin = void 0;
    class Plugin {
        getPluginIdentify() {
            return this.name + "@" + this.version;
        }
    }
    exports.Plugin = Plugin;
});
//# sourceMappingURL=plugin.js.map