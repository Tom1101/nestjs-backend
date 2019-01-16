import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Shipper } from '../shipper/shipper.entity';
import { Customer } from '../customer/customer.entity';
import { OrderDetail } from '../order-detail/order-detail.entity';
import { IsBoolean, IsInt, IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class OrderTab {
  @ApiModelProperty()
  @IsInt()
  @PrimaryGeneratedColumn() id: number;

  @ApiModelProperty()
  @IsInt()
  @Column() numero: number;

  @ApiModelProperty()
  @IsString()
  @Column() orderDate: string;

  @ApiModelProperty()
  @IsBoolean()
  @Column('boolean') paidStatus: boolean;

  @ApiModelProperty()
  @IsString()
  @Column() paymentType: string;

  @ApiModelProperty()
  @IsString()
  @Column() paymentDate: string;

  // Relations
  @ManyToOne(type => Shipper, shipper => shipper.orders)
  shipper: Shipper;
  @ManyToOne(type => Customer, customer => customer.orders)
  customer: Customer;
  @OneToMany(type => OrderDetail, orderDetail => orderDetail.order)
  orderDetails: OrderDetail[];
}
