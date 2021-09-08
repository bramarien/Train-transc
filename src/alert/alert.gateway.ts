import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({namespace: '/alert'})
export class AlertGateway {

  @WebSocketServer() wss: Server;

  sendToall(msg: string) {
    this.wss.emit('alertToclient', { type: 'Alert', message: msg });
  }
}
