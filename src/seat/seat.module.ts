import { Module } from '@nestjs/common';
import { SeatController } from './seat.controller';
import { SeatService } from './seat.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seat } from './seat.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Seat])],
  controllers: [SeatController],
  providers: [SeatService],
})
export class SeatModule {}
