import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RepositoryService } from '@nestjsx/crud/typeorm';
import { Repository } from 'typeorm';
import { OrderTab } from './order.entity';

@Injectable()
export class OrderService extends RepositoryService<OrderTab> {
  constructor(@InjectRepository(OrderTab) repo,
              @InjectRepository(OrderTab) private readonly orderRepository: Repository<OrderTab>) {
    super(repo);
  }
  async findCustomerById(id): Promise<OrderTab[]> {
    return await this.orderRepository.createQueryBuilder('order')
      .leftJoinAndSelect('order.customer', 'customer')
      .where('order.id = :orderId', { orderId: id})
      .getMany();
  }
  async findDetailById(id): Promise<OrderTab[]> {
    return await this.orderRepository.createQueryBuilder('order')
      .leftJoinAndSelect('order.orderDetails', 'orderDetail')
      .where('order.id = :orderId', { orderId: id})
      .getMany();
  }
}
