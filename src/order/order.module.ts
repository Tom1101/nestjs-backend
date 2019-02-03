import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderTab } from './order.entity';
import { CustomerService } from '../customer/customer.service';
import { CustomerController } from '../customer/customer.controller';

@Module({
  imports: [TypeOrmModule.forFeature([OrderTab])],
  providers: [OrderService, CustomerService],
  controllers: [OrderController, CustomerController],
})
export class OrderModule {}
