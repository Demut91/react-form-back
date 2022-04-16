import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Message } from './message.model';

@Injectable()
export class MessageService {
  constructor(
    @Inject('MESSAGE_REPOSITORY')
    private MessageRepository: Repository<Message>,
  ) {}

  async findAll(): Promise<Message[]> {
    return this.MessageRepository.find();
  }
}