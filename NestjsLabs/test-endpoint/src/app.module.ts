import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PartnersService } from './services/partners/partners.service';
import { PartnersController } from './controllers/partners/partners.controller';


@Module({
  imports: [],
  controllers: [AppController, PartnersController],
  providers: [AppService, PartnersService],
})
export class AppModule {}
