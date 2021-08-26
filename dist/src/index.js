var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./models/game", "./models/user", "./models/component", "./core/events", "./core/qing-core", "./core/plugin-store", "./core/plugin"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Plugin = exports.Event = exports.Severity = exports.QingCore = exports.Component = exports.User = exports.Game = void 0;
    var game_1 = require("./models/game");
    Object.defineProperty(exports, "Game", { enumerable: true, get: function () { return game_1.Game; } });
    var user_1 = require("./models/user");
    Object.defineProperty(exports, "User", { enumerable: true, get: function () { return user_1.User; } });
    var component_1 = require("./models/component");
    Object.defineProperty(exports, "Component", { enumerable: true, get: function () { return component_1.Component; } });
    __exportStar(require("./core/events"), exports);
    var qing_core_1 = require("./core/qing-core");
    Object.defineProperty(exports, "QingCore", { enumerable: true, get: function () { return qing_core_1.QingCore; } });
    Object.defineProperty(exports, "Severity", { enumerable: true, get: function () { return qing_core_1.Severity; } });
    var plugin_store_1 = require("./core/plugin-store");
    Object.defineProperty(exports, "Event", { enumerable: true, get: function () { return plugin_store_1.Event; } });
    var plugin_1 = require("./core/plugin");
    Object.defineProperty(exports, "Plugin", { enumerable: true, get: function () { return plugin_1.Plugin; } });
});
//# sourceMappingURL=index.js.map