import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RepositoryService } from '@nestjsx/crud/typeorm';
import { Repository } from 'typeorm';
import { Supplier } from './supplier.entity';

@Injectable()
export class SupplierService extends RepositoryService<Supplier> {
  constructor(@InjectRepository(Supplier) repo,
              @InjectRepository(Supplier) private readonly supplierRepository: Repository<Supplier>) {
    super(repo);
  }
}
