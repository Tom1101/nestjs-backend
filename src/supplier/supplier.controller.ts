import { Controller, Get, HttpException, HttpStatus, Param } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Supplier } from './supplier.entity';
import { SupplierService } from './supplier.service';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('Supplier')
@Crud(Supplier)
@Controller('supplier')
export class SupplierController {
  constructor(public service: SupplierService) {}

  @Get('/:id/order')
  async findOrderById(@Param('id') id) {
    return await this.service.findOrderById(id);
  }

  @Get('/:id/order/:orderId')
  async findDetailOrderById(@Param('orderId') orderId, @Param('id') id) {
    const supplier: Supplier[] = await this.service.findDetailById(id, orderId);
    if (supplier.length === 0) {
      throw new HttpException('Invalid Order ID', HttpStatus.BAD_REQUEST);
    }
    return supplier;
  }
}
