"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const util_1 = require("util");
class SocketServer {
    constructor(pid) {
        this._arrClients = [];
        this._port = pid;
        this._server = new ws_1.Server({ 'port': this._port });
    }
    get port() {
        return this._port;
    }
    startServer() {
        console.log('start server : ' + this._port);
        this._server.addListener('connection', this.onListen.bind(this));
    }
    onListen(client, request) {
        console.log('connect'); // window Main
    }
    dispose() {
        if (!util_1.isNull(this._server)) {
            this._server.removeListener('connection', this.onListen.bind(this));
            try {
                this._server.close();
            }
            catch (e) {
            }
            this._server = null;
        }
    }
    clearClients() {
        for (var i = 0; i < this._arrClients.length; i++) {
            var client = this._arrClients[i];
            client.dispose();
        }
        this._arrClients = [];
    }
}
exports.SocketServer = SocketServer;
//# sourceMappingURL=SocketServer.js.map