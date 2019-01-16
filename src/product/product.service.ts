import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RepositoryService } from '@nestjsx/crud/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService extends RepositoryService<Product> {
  constructor(@InjectRepository(Product) repo,
              @InjectRepository(Product) private readonly productRepository: Repository<Product>) {
    super(repo);
  }
}
