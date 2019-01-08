import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { SeatActiveEntity } from './seat-active.entity';
import { SeatActiveService } from './seat-active.service';

@Crud(SeatActiveEntity)
@Controller('seat-active')
export class SeatActiveController {
  constructor(public service: SeatActiveService) {}
}
