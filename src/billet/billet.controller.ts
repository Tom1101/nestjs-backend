import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { BilletEntity } from './billet.entity';
import { BilletService } from './billet.service';

@Crud(BilletEntity)
@Controller('billet')
export class BilletController {
  constructor(public service: BilletService) {}
}
