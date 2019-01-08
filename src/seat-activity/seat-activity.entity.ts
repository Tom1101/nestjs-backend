import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ManyToOne } from 'typeorm/browser';
import { SeatActiveEntity } from '../seat-active/seat-active.entity';

@Entity()
export class SeatActivityEntity {
  // Entities
  @PrimaryGeneratedColumn('uuid') id: number;
  @Column() name: string;
  @Column() duration: number;
  @Column('time') timeStart: number;
  @Column('time') timeEnd: number;
  // Relations
  @ManyToOne(type => SeatActiveEntity, seatActive => seatActive.seatActivities)
  seatActive: SeatActiveEntity;
}
