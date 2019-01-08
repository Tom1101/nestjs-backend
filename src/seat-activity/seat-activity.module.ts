import { Module } from '@nestjs/common';
import { SeatActivityController } from './seat-activity.controller';
import { SeatActivityService } from './seat-activity.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeatActivityEntity } from './seat-activity.entity';
@Module({
  imports: [TypeOrmModule.forFeature([SeatActivityEntity])],
  controllers: [SeatActivityController],
  providers: [SeatActivityService],
})
export class SeatActivityModule {}
