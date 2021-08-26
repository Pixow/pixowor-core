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
    exports.Game = exports.GameVersion = exports.Visibility = void 0;
    var Visibility;
    (function (Visibility) {
        Visibility["Private"] = "Private";
        Visibility["Internal"] = "Internal";
        Visibility["Public"] = "Public";
    })(Visibility = exports.Visibility || (exports.Visibility = {}));
    class GameVersion {
        constructor(init) {
            Object.assign(this, init);
        }
    }
    exports.GameVersion = GameVersion;
    class Game {
        constructor(data) {
            Object.assign(this, data);
        }
        getUri(version) {
            // mjxmjx\game\5f1a49e2b5ad7b67aae31170\0.0.4\5f1a49e2b5ad7b67aae31170.zip
            return `${this.owner.username}/game/${this._id}/${version}/${this._id}.zip`;
        }
        get directory() {
            return `${this.owner.username}/game/${this._id}`;
        }
        get pi() {
            return `${this.directory}/${this._id}.pi`;
        }
        get package() {
            return `${this.directory}/package.json`;
        }
    }
    exports.Game = Game;
});
//# sourceMappingURL=game.js.map