import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RepositoryService } from '@nestjsx/crud/typeorm';
import { SeatActive } from './seat-active.entity';

@Injectable()
export class SeatActiveService extends RepositoryService<SeatActive> {
  constructor(@InjectRepository(SeatActive) repo) {
    super(repo);
  }
}
