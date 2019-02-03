import { Controller, Get, Param } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { OrderTab } from './order.entity';
import { OrderService } from './order.service';
import { ApiUseTags } from '@nestjs/swagger';
import { CustomerService } from '../customer/customer.service';

@ApiUseTags('Order')
@Crud(OrderTab)
@Controller('order')
export class OrderController implements CrudController<OrderService, OrderTab> {
  constructor(public service: OrderService, public serviceCustomer: CustomerService) {
  }
  @Get('/customer/:id')
  async findOrderByCustomerId(@Param('id') id) {
    return await this.serviceCustomer.findOrderById(id);
  }
  @Get('/:id/customer')
  async findCustomerById(@Param('id') id) {
    return await this.service.findCustomerById(id);
  }
  @Get('/:id/detail')
  async findDetailById(@Param('id') id) {
    return await this.service.findDetailById(id);
  }
}
