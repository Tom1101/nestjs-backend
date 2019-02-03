import { Controller, Get, Param } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Shipper } from './shipper.entity';
import { ShipperService } from './shipper.service';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('Shipper')
@Crud(Shipper)
@Controller('shipper')
export class ShipperController {
  constructor(public service: ShipperService) {}
  @Get('/:id/order')
  async findOrderById(@Param('id') id) {
    return await this.service.findOrderById(id);
  }
}
