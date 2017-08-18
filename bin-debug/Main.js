"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const II_1 = require("./II");
class Main {
    constructor() {
        for (var i = 0; i < 100; i++) {
            II_1.II.socketManager.addServer();
        }
    }
}
var main = new Main();
//# sourceMappingURL=Main.js.map