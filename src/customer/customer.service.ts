import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RepositoryService } from '@nestjsx/crud/typeorm';
import { Customer } from './customer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CustomerService extends RepositoryService<Customer> {
  constructor(@InjectRepository(Customer) repo,
              @InjectRepository(Customer) private readonly customerRepository: Repository<Customer>) {
    super(repo);
  }
  async findOrderById(id): Promise<Customer[]> {
    return await this.customerRepository.createQueryBuilder('customer')
      .leftJoinAndSelect('customer.orders', 'order')
      .where('customer.id = :customerId', { customerId: id})
      .getMany();
  }
  async findDetailById(id, orderId): Promise<Customer[]> {
    return await this.customerRepository.createQueryBuilder('customer')
      .leftJoinAndSelect('customer.orders', 'order')
      .leftJoinAndSelect('order.orderDetails', 'orderDetail')
      .where('customer.id = :customerId', { customerId: id})
      .andWhere('order.id = :orderid', { orderid : orderId})
      .getMany();
  }
}
