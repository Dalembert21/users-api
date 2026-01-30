import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { KafkaModule } from '../kafka/kafka.module';
@Module({
  imports: [KafkaModule],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
