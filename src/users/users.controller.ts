import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { ClientKafka } from '@nestjs/microservices';
import { Inject } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(
    @Inject('KAFKA_SERVICE') private readonly kafkaClient: ClientKafka,
  ) {}

  @Post()

  createUser(@Body() dto: CreateUserDto) {
    // EVENTO PARA KAFKA
    this.kafkaClient.emit('user.created', dto);

   
    return { message: 'Solicitud de creacion recibida' };
  }
}
