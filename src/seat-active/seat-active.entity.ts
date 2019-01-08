import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { SeatEntity } from '../seat/seat.entity';
import { SeatActivityEntity } from '../seat-activity/seat-activity.entity';
import { BilletEntity } from '../billet/billet.entity';

@Entity()
export class SeatActiveEntity {
  // Entities
  @PrimaryGeneratedColumn() id: number;
  @Column() dateActive: Date;
  @Column() dateInactive: Date;
  // Relations
  @OneToOne(type => SeatEntity)
  @JoinColumn()
  seat: SeatEntity;
  @OneToOne(type => BilletEntity)
  @JoinColumn()
  billet: BilletEntity;
  @OneToMany(type => SeatActivityEntity, seatActivity => seatActivity.seatActive)
  seatActivities: SeatActivityEntity[];
}
