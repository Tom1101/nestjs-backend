import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RepositoryService } from '@nestjsx/crud/typeorm';
import { Seat } from './seat.entity';

@Injectable()
export class SeatService extends RepositoryService<Seat> {
  constructor(@InjectRepository(Seat) repo) {
    super(repo);
  }
}
