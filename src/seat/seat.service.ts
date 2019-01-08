import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RepositoryService } from '@nestjsx/crud/typeorm';
import { SeatEntity } from './seat.entity';

@Injectable()
export class SeatService extends RepositoryService<SeatEntity> {
  constructor(@InjectRepository(SeatEntity) repo) {
    super(repo);
  }
}
