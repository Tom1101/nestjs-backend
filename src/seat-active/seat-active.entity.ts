import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { Seat } from '../seat/seat.entity';
import { SeatActivity } from '../seat-activity/seat-activity.entity';
import { Billet } from '../billet/billet.entity';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';

@Entity()
export class SeatActive {
  // Entities
  @ApiModelProperty()
  @IsInt()
  @PrimaryGeneratedColumn() id: number;

  @ApiModelProperty()
  @Column() dateActive: Date;

  @ApiModelProperty()
  @Column() dateInactive: Date;
  // Relations
  @OneToOne(type => Seat)
  @JoinColumn()
  seat: Seat;
  @OneToOne(type => Billet)
  @JoinColumn()
  billet: Billet;
  @OneToMany(type => SeatActivity, seatActivity => seatActivity.seatActive)
  seatActivities: SeatActivity[];
}
