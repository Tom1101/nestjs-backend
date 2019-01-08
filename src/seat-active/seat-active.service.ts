import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RepositoryService } from '@nestjsx/crud/typeorm';
import { SeatActiveEntity } from './seat-active.entity';

@Injectable()
export class SeatActiveService extends RepositoryService<SeatActiveEntity> {
  constructor(@InjectRepository(SeatActiveEntity) repo) {
    super(repo);
  }
}
