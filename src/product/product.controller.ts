import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Product } from './product.entity';
import { ProductService } from './product.service';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('Product')
@Crud(Product)
@Controller('product')
export class ProductController {
  constructor(public service: ProductService) {}
}
