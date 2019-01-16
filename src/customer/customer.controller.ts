import { Controller, Get, HttpException, HttpStatus, Param } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Customer } from './customer.entity';
import { CustomerService } from './customer.service';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('Customer')
@Crud(Customer)
@Controller('customer')
export class CustomerController {
  constructor(public service: CustomerService) {
  }

  @Get('/:id/order')
  async findOrderById(@Param('id') id) {
    return await this.service.findOrderById(id);
  }

  @Get('/:id/order/:orderId')
  async findDetailOrderById(@Param('orderId') orderId, @Param('id') id) {
    const customer: Customer[] = await this.service.findDetailById(id, orderId);
    if (customer.length === 0) {
      throw new HttpException('Invalid Order ID', HttpStatus.BAD_REQUEST);
    }
    return customer;
  }
}
