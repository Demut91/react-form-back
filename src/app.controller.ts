import {
  Body,
  Controller,
  Get,
  Post
} from '@nestjs/common';
import { Message } from './message.model';


@Controller()
export class AppController {

  @Get()
  async index() {
    return { messages: await Message.find() };
  }

  @Post()
  async create(
    @Body() body: { name: string, email: string, text: string, id?: number },
  ): Promise<void> {
    const message = new Message(body.name, body.email, body.text);
    await message.save();
  }
}
