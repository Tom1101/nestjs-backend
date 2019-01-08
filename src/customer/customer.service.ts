import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RepositoryService } from '@nestjsx/crud/typeorm';
import { CustomerEntity } from './customer.entity';

@Injectable()
export class CustomerService extends RepositoryService<CustomerEntity> {
  constructor(@InjectRepository(CustomerEntity) repo) {
    super(repo);
  }
}
