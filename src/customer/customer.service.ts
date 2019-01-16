import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RepositoryService } from '@nestjsx/crud/typeorm';
import { Customer } from './customer.entity';

@Injectable()
export class CustomerService extends RepositoryService<Customer> {
  constructor(@InjectRepository(Customer) repo) {
    super(repo);
  }
}
