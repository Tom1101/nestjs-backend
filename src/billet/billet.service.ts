import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RepositoryService } from '@nestjsx/crud/typeorm';
import { Billet } from './billet.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BilletService extends RepositoryService<Billet> {
  constructor(@InjectRepository(Billet) repo,
              @InjectRepository(Billet) private readonly billetRepository: Repository<Billet>) {
    super(repo);
  }
  async findOneByNumero(numero): Promise<Billet> {
    return await this.billetRepository.findOne({numero : numero});
  }
}
