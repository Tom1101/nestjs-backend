import { Module } from '@nestjs/common';
import { SeatActiveService } from './seat-active.service';
import { SeatActiveController } from './seat-active.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeatActiveEntity } from './seat-active.entity';
@Module({
  imports: [TypeOrmModule.forFeature([SeatActiveEntity])],
  providers: [SeatActiveService],
  controllers: [SeatActiveController],
})
export class SeatActiveModule {}
