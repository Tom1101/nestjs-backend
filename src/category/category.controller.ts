import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Category } from './category.entity';
import { CategoryService } from './category.service';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('Category')
@Crud(Category)
@Controller('category')
export class CategoryController {
  constructor(public service: CategoryService) {}
}
