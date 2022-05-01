import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './databases/database.module';
import { CantonsModule } from './cantons/cantons.module';
@Module({
  imports: [DatabaseModule, CantonsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
