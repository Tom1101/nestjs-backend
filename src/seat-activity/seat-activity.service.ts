import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RepositoryService } from '@nestjsx/crud/typeorm';
import { SeatActivityEntity } from './seat-activity.entity';

@Injectable()
export class SeatActivityService extends RepositoryService<SeatActivityEntity> {
  constructor(@InjectRepository(SeatActivityEntity) repo) {
    super(repo);
  }
}
