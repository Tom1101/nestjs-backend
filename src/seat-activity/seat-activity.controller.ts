import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { SeatActivity } from './seat-activity.entity';
import { SeatActivityService } from './seat-activity.service';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('Seat Activity')
@Crud(SeatActivity)
@Controller('seat-activity')
export class SeatActivityController {
  constructor(public service: SeatActivityService) {}
}
