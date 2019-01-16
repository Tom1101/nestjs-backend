import { Module } from '@nestjs/common';
import { SeatActiveService } from './seat-active.service';
import { SeatActiveController } from './seat-active.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeatActive } from './seat-active.entity';
@Module({
  imports: [TypeOrmModule.forFeature([SeatActive])],
  providers: [SeatActiveService],
  controllers: [SeatActiveController],
})
export class SeatActiveModule {}
