import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { Seat } from '../seat/seat.entity';
import { SeatActivity } from '../seat-activity/seat-activity.entity';
import { Billet } from '../billet/billet.entity';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

@Entity()
export class SeatActive {
  // Entities
  @ApiModelProperty()
  @IsInt()
  @PrimaryGeneratedColumn() id: number;

  @ApiModelProperty()
  @IsString()
  @Column() dateActive: string;

  // Relations
  @ManyToOne(type => Seat, seat => seat.seatActives)
  seat: Seat;

  @ManyToOne(type => Billet, billet => billet.seatActives)
  billet: Billet;

  @OneToMany(type => SeatActivity, seatActivity => seatActivity.seatActive)
  seatActivities: SeatActivity[];
}
