import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SeatEntity {
  // Entities
  @PrimaryGeneratedColumn() id: number;
  @Column() numero: number;
  @Column() location: string;
  @Column('boolean') isWorking: boolean;
  // Relations
}
