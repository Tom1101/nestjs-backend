import { Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import { BilletEntity } from '../billet/billet.entity';

@Entity()
export class CustomerEntity {
  // Entities
  @PrimaryGeneratedColumn() id: number;
  @Column({ length: 100 }) name: string;
  @Column('int') phone: number;
  @Column() mail: string;
  // Relations
  @OneToMany(type => BilletEntity, billet => billet.customer)
  billets: BilletEntity[];
}
