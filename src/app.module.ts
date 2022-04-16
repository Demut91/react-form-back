import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DatabaseModule } from './database.module';
import { messageProviders } from './message.providers';
import { MessageService } from './message.service';


@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [
    ...messageProviders,
    MessageService,
  ],

})
export class AppModule { }


