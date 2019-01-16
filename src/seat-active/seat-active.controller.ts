import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { SeatActive } from './seat-active.entity';
import { SeatActiveService } from './seat-active.service';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('Seat Active')
@Crud(SeatActive)
@Controller('seat-active')
export class SeatActiveController {
  constructor(public service: SeatActiveService) {}
}
