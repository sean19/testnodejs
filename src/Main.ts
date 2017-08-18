import {Server} from "ws";
import WebSocket = require("ws");
import {IncomingMessage} from "http";
import {II} from "./II";

class Main
{

    constructor(){
        for(var i:number = 0;i<100;i++)
        {
            II.socketManager.addServer();
        }
    }
}
var main:Main = new Main();