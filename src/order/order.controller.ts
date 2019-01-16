import { Controller, Get, Param } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { OrderTab } from './order.entity';
import { OrderService } from './order.service';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('Order')
@Crud(OrderTab)
@Controller('order')
export class OrderController implements CrudController<OrderService, OrderTab> {
  constructor(public service: OrderService) {
  }
  @Get('/customer/:id')
  async findOrderByCustomerId(@Param('id') id) {
    return await this.service.findOrderByCustomerId(id);
  }
  @Get('/:id/detail')
  async findDetailById(@Param('id') id) {
    return await this.service.findDetailById(id);
  }
}
