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
    exports.Component = exports.ComponentType = void 0;
    var ComponentType;
    (function (ComponentType) {
        ComponentType["SpawnPointNode"] = "SpawnPointNode";
        ComponentType["ElementNode"] = "ElementNode";
        ComponentType["TerrainNode"] = "TerrainNode";
        ComponentType["CustomNode"] = "CustomNode";
        ComponentType["EffectNode"] = "EffectNode";
        ComponentType["CarpetNode"] = "CarpetNode";
        ComponentType["WallNode"] = "WallNode";
    })(ComponentType = exports.ComponentType || (exports.ComponentType = {}));
    class Component {
    }
    exports.Component = Component;
});
//# sourceMappingURL=component.js.map