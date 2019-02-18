import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsString } from 'class-validator';
import { SeatActive } from '../seat-active/seat-active.entity';

@Entity()
export class Seat {
  // Entities
  @ApiModelProperty()
  @IsInt()
  @PrimaryGeneratedColumn() id: number;

  @ApiModelProperty()
  @IsInt()
  @Column() numero: number;

  @ApiModelProperty()
  @IsString()
  @Column() location: string;

  @ApiModelProperty()
  @IsBoolean()
  @Column('boolean') isWorking: boolean;

  // Relations
  @OneToMany(type => SeatActive, seatActive => seatActive.seat)
  seatActives: SeatActive[];
}
