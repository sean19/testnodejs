import {Server} from "ws";
import {IncomingMessage} from "http";
import {isNull} from "util";
import {SocketClient} from "./SocketClient";

export class SocketServer
{
    private _server:Server ;
    private _port:number;
    private  _arrClients:SocketClient[] = [];
    constructor (pid:number)
    {
        this._port = pid;
        this._server = new Server({'port':this._port});
    }

    get port():number
    {
        return this._port;
    }

    public  startServer():void
    {
        console.log('start server : '+this._port);
        this._server.addListener('connection',this.onListen.bind( this ));
    }
    private onListen(client: WebSocket, request:IncomingMessage):void
    {
        console.log('connect') // window Main
    }
    public dispose():void
    {
        if( !isNull(this._server))
        {
            this._server.removeListener('connection',this.onListen.bind( this ));
            try {
                this._server.close();
            }catch (e)
            {

            }
            this._server = <any>null;
        }
    }
    protected clearClients():void
    {
        for(var i:number=0;i<this._arrClients.length;i++)
        {
            var client:SocketClient = this._arrClients[i];
            client.dispose();
        }
        this._arrClients = [];
    }
}