import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { BilletEntity } from '../billet/billet.entity';
import { OneToMany } from 'typeorm/browser';

@Entity()
export class CustomerEntity {
  // Entities
  @PrimaryGeneratedColumn('uuid') id: number;
  @Column({ length: 100 }) name: string;
  @Column('int') phone: number;
  @Column('varchar2') mail: string;
  // Relations
  @OneToMany(type => BilletEntity, billet => billet.customer)
  billets: BilletEntity[];
}
