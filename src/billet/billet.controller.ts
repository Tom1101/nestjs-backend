import { Controller } from '@nestjs/common';
import { Crud, CrudController} from '@nestjsx/crud';
import { Billet } from './billet.entity';
import { BilletService } from './billet.service';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('Billet')
@Crud(Billet)
@Controller('billet')
export class BilletController implements CrudController<BilletService, Billet> {
  constructor(public service: BilletService) {}
}
