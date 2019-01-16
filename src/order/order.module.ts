import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderTab } from './order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrderTab])],
  providers: [OrderService],
  controllers: [OrderController],
})
export class OrderModule {}
