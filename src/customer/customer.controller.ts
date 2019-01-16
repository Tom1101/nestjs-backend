import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Customer } from './customer.entity';
import { CustomerService } from './customer.service';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('Customer')
@Crud(Customer)
@Controller('customer')
export class CustomerController {
  constructor(public service: CustomerService) {}
}
