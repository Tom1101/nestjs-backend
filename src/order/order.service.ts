import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RepositoryService } from '@nestjsx/crud/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';

@Injectable()
export class OrderService extends RepositoryService<Order> {
  constructor(@InjectRepository(Order) repo,
              @InjectRepository(Order) private readonly orderRepository: Repository<Order>) {
    super(repo);
  }}
