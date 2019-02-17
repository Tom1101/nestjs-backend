import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne, JoinColumn, OneToMany, Index } from 'typeorm';
import { OrderTab } from '../order/order.entity';
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

  @ApiModelProperty()
  @IsInt()
  @Column({ nullable: true }) orderId: number;

  @ApiModelProperty()
  @IsInt()
  @Column({ nullable: true }) productId: number;

  // Relation
  @ManyToOne(type => OrderTab, order => order.orderDetails)
  @JoinColumn()
  order: OrderTab;

  @ManyToOne(type => Product, product => product.orderDetails)
  @JoinColumn()
  product: Product;
}
