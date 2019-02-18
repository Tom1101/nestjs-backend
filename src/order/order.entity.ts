import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Shipper } from '../shipper/shipper.entity';
import { Customer } from '../customer/customer.entity';
import { OrderDetail } from '../order-detail/order-detail.entity';
import { IsBoolean, IsInt, IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
import { Supplier } from '../supplier/supplier.entity';

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
  @IsString()
  @Column() orderTime: string;

  @ApiModelProperty()
  @IsBoolean()
  @Column('boolean') paidStatus: boolean;

  @ApiModelProperty()
  @IsString()
  @Column() paymentType: string;

  @ApiModelProperty()
  @IsString()
  @Column() paymentDate: string;

  @ApiModelProperty()
  @IsString()
  @Column() status: string;

  @ApiModelProperty()
  @IsInt()
  @Column({ nullable: true }) shipperId: number;

  @ApiModelProperty()
  @IsInt()
  @Column({ nullable: true }) customerId: number;

  @ApiModelProperty()
  @IsInt()
  @Column({ nullable: true }) supplierId: number;

  // Relations
  @ManyToOne(type => Shipper, shipper => shipper.orders)
  @JoinColumn()
  shipper: Shipper;
  @ManyToOne(type => Customer, customer => customer.orders)
  @JoinColumn()
  customer: Customer;
  @ManyToOne(type => Supplier, supplier => supplier.orders)
  @JoinColumn()
  supplier: Supplier;
  @OneToMany(type => OrderDetail, orderDetail => orderDetail.order)
  orderDetails: OrderDetail[];
}
