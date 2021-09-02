export var Visibility;
(function (Visibility) {
    Visibility["Private"] = "Private";
    Visibility["Internal"] = "Internal";
    Visibility["Public"] = "Public";
})(Visibility || (Visibility = {}));
var GameVersion = /** @class */ (function () {
    function GameVersion(init) {
        Object.assign(this, init);
    }
    return GameVersion;
}());
export { GameVersion };
var Game = /** @class */ (function () {
    function Game(data) {
        Object.assign(this, data);
    }
    Game.prototype.getUri = function (version) {
        // mjxmjx\game\5f1a49e2b5ad7b67aae31170\0.0.4\5f1a49e2b5ad7b67aae31170.zip
        return this.owner.username + "/game/" + this._id + "/" + version + "/" + this._id + ".zip";
    };
    Object.defineProperty(Game.prototype, "directory", {
        get: function () {
            return this.owner.username + "/game/" + this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "pi", {
        get: function () {
            return this.directory + "/" + this._id + ".pi";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "package", {
        get: function () {
            return this.directory + "/package.json";
        },
        enumerable: false,
        configurable: true
    });
    return Game;
}());
export { Game };
//# sourceMappingURL=game.js.map