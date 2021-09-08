import { Server } from 'socket.io';
export declare class AlertGateway {
    wss: Server;
    sendToall(msg: string): void;
}
