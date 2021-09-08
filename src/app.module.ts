import { Module } from '@nestjs/common';
import { ChatGateway } from './chat/chat.gateway';
import { AlertGateway } from './alert/alert.gateway';

@Module({
  imports: [],
  controllers: [],
  providers: [ChatGateway, AlertGateway],
})
export class AppModule {}
