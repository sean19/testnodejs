"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const util_1 = require("util");
class GameManager {
    constructor(port) {
        this._port = port;
    }
    startGame() {
        this._server = new ws_1.Server({ 'port': 8085 });
        this._server.addListener('connection', this.onListen.bind(this));
    }
    onListen(client, request) {
        console.log('connect'); // window Main
    }
    dispose() {
        if (!util_1.isNull(this._server)) {
            try {
                //this._server.close();
            }
            catch (e) {
            }
            //this._server = <any>null;
        }
    }
}
exports.GameManager = GameManager;
//# sourceMappingURL=GameManager.js.map