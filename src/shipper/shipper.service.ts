import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RepositoryService } from '@nestjsx/crud/typeorm';
import { Repository } from 'typeorm';
import { Shipper } from './shipper.entity';

@Injectable()
export class ShipperService extends RepositoryService<Shipper> {
  constructor(@InjectRepository(Shipper) repo,
              @InjectRepository(Shipper) private readonly shipperRepository: Repository<Shipper>) {
    super(repo);
  }
}
