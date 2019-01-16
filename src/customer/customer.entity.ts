import { Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import { Billet } from '../billet/billet.entity';
import { OrderTab } from '../order/order.entity';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

@Entity()
export class Customer {
  // Entities
  @ApiModelProperty()
  @IsInt()
  @PrimaryGeneratedColumn() id: number;

  @ApiModelProperty()
  @IsString()
  @Column({ length: 100 }) name: string;

  @ApiModelProperty()
  @IsString()
  @Column() phone: string;

  @ApiModelProperty()
  @IsString()
  @Column() mail: string;

  // Relations
  @OneToMany(type => Billet, billet => billet.customer)
  billets: Billet[];
  @OneToMany(type => OrderTab, order => order.customer)
  orders: OrderTab[];
}
