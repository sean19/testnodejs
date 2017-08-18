"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SocketServer_1 = require("./socket/SocketServer");
class SocketManager {
    constructor() {
        this.portid = 8085;
        this.arrserver = [];
    }
    addServer() {
        this.portid++;
        var server = new SocketServer_1.SocketServer(this.portid);
        server.startServer();
        this.arrserver.push(server);
    }
    removeServer(serverid) {
        for (var i = 0; i < this.arrserver.length; i++) {
            var server = this.arrserver[i];
            if (server.port == serverid) {
                server.dispose();
                this.arrserver.splice(i, 1);
                return;
            }
        }
    }
    getServer(serverid) {
        for (var i = 0; i < this.arrserver.length; i++) {
            var server = this.arrserver[i];
            if (server.port == serverid) {
                return server;
            }
        }
        return null;
    }
}
exports.SocketManager = SocketManager;
//# sourceMappingURL=SocketManager.js.map