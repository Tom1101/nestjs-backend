import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { OrderDetail } from './order-detail.entity';
import { OrderDetailService } from './order-detail.service';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('Order Detail')
@Crud(OrderDetail)
@Controller('order-detail')
export class OrderDetailController {
  constructor(public service: OrderDetailService) {}
}
