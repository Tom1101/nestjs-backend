import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { Seat } from './seat.entity';
import { SeatService } from './seat.service';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('Seat')
@Crud(Seat)
@Controller('seat')
export class SeatController {
  constructor(public service: SeatService) {}
}
