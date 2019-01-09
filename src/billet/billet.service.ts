import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RepositoryService } from '@nestjsx/crud/typeorm';
import { BilletEntity } from './billet.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BilletService extends RepositoryService<BilletEntity> {
  constructor(@InjectRepository(BilletEntity) repo,
              @InjectRepository(BilletEntity) private readonly billetRepository: Repository<BilletEntity>) {
    super(repo);
  }
  async findOneByNumero(numero): Promise<BilletEntity> {
    return await this.billetRepository.findOne({numero});
  }
}
