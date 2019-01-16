import { Module } from '@nestjs/common';
import { SeatActivityController } from './seat-activity.controller';
import { SeatActivityService } from './seat-activity.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeatActivity } from './seat-activity.entity';
@Module({
  imports: [TypeOrmModule.forFeature([SeatActivity])],
  controllers: [SeatActivityController],
  providers: [SeatActivityService],
})
export class SeatActivityModule {}
