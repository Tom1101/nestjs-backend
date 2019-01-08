import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { SeatActivityEntity } from './seat-activity.entity';
import { SeatActivityService } from './seat-activity.service';

@Crud(SeatActivityEntity)
@Controller('seat-activity')
export class SeatActivityController {
  constructor(public service: SeatActivityService) {}
}
