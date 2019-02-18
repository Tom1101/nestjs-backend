import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinTable } from 'typeorm';
import { OrderTab } from '../order/order.entity';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

@Entity()
export class Shipper {
  @ApiModelProperty()
  @IsInt()
  @PrimaryGeneratedColumn() id: number;

  @ApiModelProperty()
  @IsString()
  @Column() name: string;

  @ApiModelProperty()
  @IsString()
  @Column() phone: string;
  // Relations
  @OneToMany(type => OrderTab, order => order.shipper)
  orders: OrderTab[];
}
