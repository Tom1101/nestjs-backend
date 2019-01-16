import { Module } from '@nestjs/common';
import { ShipperService } from './shipper.service';
import { ShipperController } from './shipper.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shipper } from './shipper.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Shipper])],
  providers: [ShipperService],
  controllers: [ShipperController],
})
export class ShipperModule {}
