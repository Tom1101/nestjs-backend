import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Order } from './order.entity';
import { OrderService } from './order.service';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('Order')
@Crud(Order)
@Controller('order')
export class OrderController {
  constructor(public service: OrderService) {}
}
