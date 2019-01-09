import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerModule } from './customer/customer.module';
import { BilletModule } from './billet/billet.module';
import { SeatModule } from './seat/seat.module';
import { SeatActiveModule } from './seat-active/seat-active.module';
import { SeatActivityModule } from './seat-activity/seat-activity.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(), CustomerModule, BilletModule, SeatModule, SeatActiveModule, SeatActivityModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
