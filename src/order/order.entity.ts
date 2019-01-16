import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Shipper } from '../shipper/shipper.entity';
import { Customer } from '../customer/customer.entity';
import { OrderDetail } from '../order-detail/order-detail.entity';
import { IsBoolean, IsInt, IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class Order {
  @ApiModelProperty()
  @IsInt()
  @PrimaryGeneratedColumn() id: number;

  @ApiModelProperty()
  @IsInt()
  @Column() numero: number;

  @ApiModelProperty()
  @IsInt()
  @Column() orderDate: number;

  @ApiModelProperty()
  @IsBoolean()
  @Column('boolean') paidStatus: boolean;

  @ApiModelProperty()
  @IsString()
  @Column() paymentType: string;

  @ApiModelProperty()
  @Column() paymentDate: Date;

  @ApiModelProperty()
  @IsInt()
  @Column('time') shippingTime: number;

  // Relations
  @ManyToOne(type => Shipper, shipper => shipper.orders)
  shipper: Shipper;
  @ManyToOne(type => Customer, customer => customer.orders)
  customer: Customer;
  @OneToMany(type => OrderDetail, orderDetail => orderDetail.order)
  orderDetails: OrderDetail[];
}
