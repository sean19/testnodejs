
/*
处理socket
* */
 import {SocketClient} from "./SocketClient";

export class SocketClinetMain extends SocketClient {
    constructor(server: WebSocket) {
        super(server);
    }
}
