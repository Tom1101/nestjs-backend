import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RepositoryService } from '@nestjsx/crud/typeorm';
import { Category } from './category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService extends RepositoryService<Category> {
  constructor(@InjectRepository(Category) repo,
              @InjectRepository(Category) private readonly categoryRepository: Repository<Category>) {
    super(repo);
  }
}
