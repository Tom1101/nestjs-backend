import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RepositoryService } from '@nestjsx/crud/typeorm';
import { SeatActivity } from './seat-activity.entity';

@Injectable()
export class SeatActivityService extends RepositoryService<SeatActivity> {
  constructor(@InjectRepository(SeatActivity) repo) {
    super(repo);
  }
}
