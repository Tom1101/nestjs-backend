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
  async findProductById(id): Promise<Category[]> {
    return await this.categoryRepository.createQueryBuilder('category')
      .leftJoinAndSelect('category.products', 'product')
      .where('category.id = :categoryId', { categoryId: id})
      .getMany();
  }
}
