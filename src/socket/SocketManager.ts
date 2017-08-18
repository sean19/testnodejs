import {SocketServer} from "./SocketServer";

export class SocketManager
{
    private portid:number = 8085;
    private arrserver:SocketServer[] = [];
    public addServer():void
    {
        this.portid ++;
        var server:SocketServer = new SocketServer(this.portid);
        server.startServer();
        this.arrserver.push(server);
    }
    public removeServer(serverid:number):void
    {
        for(var i:number = 0;i<this.arrserver.length;i++)
        {
            var server:SocketServer = this.arrserver[i];
            if(server.port == serverid)
            {
                server.dispose();
                this.arrserver.splice( i,1);
                return;
            }
        }

    }
    public getServer(serverid:number):SocketServer
    {
        for(var i:number = 0;i<this.arrserver.length;i++)
        {
            var server:SocketServer = this.arrserver[i];
            if(server.port == serverid)
            {
                return server;
            }
        }
        return <any>null;
    }
}