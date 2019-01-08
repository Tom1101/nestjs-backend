import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { SeatEntity } from './seat.entity';
import { SeatService } from './seat.service';

@Crud(SeatEntity)
@Controller('seat')
export class SeatController {
  constructor(public service: SeatService) {}
}
