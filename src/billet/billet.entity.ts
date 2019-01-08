import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm';
import { CustomerEntity } from '../customer/customer.entity';

@Entity()
export class BilletEntity {
  // Entities
  @PrimaryGeneratedColumn('uuid') id: number;
  @Column() numero: string;
  @Column() fromWhere: string;
  @Column() toWhere: string;
  @Column('time') dateDepat: Date;
  @Column('time') timeDepart: number;
  @Column('time') timeArrival: number;
  // Relations
  @ManyToOne(type => CustomerEntity, customer => customer.billets)
  customer: CustomerEntity;
}
