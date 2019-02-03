import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderTab } from './order.entity';
import { CustomerService } from '../customer/customer.service';
import { CustomerModule } from '../customer/customer.module';

@Module({
  imports: [TypeOrmModule.forFeature([OrderTab]),CustomerModule],
  providers: [OrderService, CustomerService],
  controllers: [OrderController],
})
export class OrderModule {}
