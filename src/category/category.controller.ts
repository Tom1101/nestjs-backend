import { Controller, Get, Param } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Category } from './category.entity';
import { CategoryService } from './category.service';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('Category')
@Crud(Category)
@Controller('category')
export class CategoryController {
  constructor(public service: CategoryService) {}

  @Get('/:id/product')
  async findProductById(@Param('id') id) {
    return await this.service.findProductById(id);
  }

}
