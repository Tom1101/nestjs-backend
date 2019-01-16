import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RepositoryService } from '@nestjsx/crud/typeorm';
import { Repository } from 'typeorm';
import { OrderDetail } from './order-detail.entity';

@Injectable()
export class OrderDetailService extends RepositoryService<OrderDetail> {
  constructor(@InjectRepository(OrderDetail) repo,
              @InjectRepository(OrderDetail) private readonly orderDetailRepository: Repository<OrderDetail>) {
    super(repo);
  }
}
