import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import { Order } from '../order/order.entity';
import { Product } from '../product/product.entity';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';

@Entity()
export class OrderDetail {
  @ApiModelProperty()
  @IsInt()
  @PrimaryGeneratedColumn() id: number;

  @ApiModelProperty()
  @IsInt()
  @Column() quantity: number;

  @ApiModelProperty()
  @IsInt()
  @Column() discount: number;

  @ApiModelProperty()
  @IsInt()
  @Column() total: number;
  // Relation
  @ManyToOne(type => Order, order => order.orderDetails)
  order: Order;
  @OneToOne(type => Product)
  @JoinColumn()
  product: Product;
}
