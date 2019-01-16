import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Supplier } from './supplier.entity';
import { SupplierService } from './supplier.service';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('Supplier')
@Crud(Supplier)
@Controller('supplier')
export class SupplierController {
  constructor(public service: SupplierService) {}
}
