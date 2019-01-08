import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { CustomerEntity } from './customer.entity';
import { CustomerService } from './customer.service';

@Crud(CustomerEntity)
@Controller('customer')
export class CustomerController {
  constructor(public service: CustomerService) {}
}
