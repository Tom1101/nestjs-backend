import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { OrderDetail } from './order-detail.entity';
import { OrderDetailService } from './order-detail.service';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('Order Detail')
@Crud(OrderDetail)
@Controller('order-detail')
export class OrderDetailController implements CrudController<OrderDetailService, OrderDetail> {
  constructor(public service: OrderDetailService) {}
}
