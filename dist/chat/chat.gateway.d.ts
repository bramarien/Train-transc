import { OnGatewayInit } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
export declare class ChatGateway implements OnGatewayInit {
    wss: Server;
    private logger;
    afterInit(server: any): void;
    handleMessage(client: Socket, message: {
        sender: string;
        room: string;
        message: string;
    }): void;
}
