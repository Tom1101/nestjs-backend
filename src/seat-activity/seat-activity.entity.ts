import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { SeatActiveEntity } from '../seat-active/seat-active.entity';

@Entity()
export class SeatActivityEntity {
  // Entities
  @PrimaryGeneratedColumn() id: number;
  @Column() name: string;
  @Column() duration: number;
  @Column('time') timeStart: number;
  @Column('time') timeEnd: number;
  // Relations
  @ManyToOne(type => SeatActiveEntity, seatActive => seatActive.seatActivities)
  seatActive: SeatActiveEntity;
}
