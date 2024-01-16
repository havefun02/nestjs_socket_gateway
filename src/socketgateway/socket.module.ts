import { Module } from '@nestjs/common';
import { EventsGateway } from './socket.gateway';

@Module({
  imports: [],
  controllers: [],
  providers: [EventsGateway],
})
export class SocketModule {}
