import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RepositoryService } from '@nestjsx/crud/typeorm';
import { OrderDetail } from './order-detail.entity';
import { RestfulOptions } from '@nestjsx/crud';

@Injectable()
export class OrderDetailService extends RepositoryService<OrderDetail> {
  protected options: RestfulOptions = {};

  constructor(@InjectRepository(OrderDetail) repo) {
    super(repo);
  }
}
