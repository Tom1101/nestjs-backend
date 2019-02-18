import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Category } from '../category/category.entity';
import { Supplier } from '../supplier/supplier.entity';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsString } from 'class-validator';
import { OrderDetail } from '../order-detail/order-detail.entity';

@Entity()
export class Product {
  @ApiModelProperty()
  @IsInt()
  @PrimaryGeneratedColumn() id: number;

  @ApiModelProperty()
  @IsString()
  @Column() name: string;

  @ApiModelProperty()
  @IsString()
  @Column() url: string;

  @ApiModelProperty()
  @IsInt()
  @Column() quantity: number;

  @ApiModelProperty()
  @IsInt()
  @Column() price: number;

  @ApiModelProperty()
  @IsBoolean()
  @Column() status: boolean;

  @ApiModelProperty()
  @IsInt()
  @Column({ nullable: true }) categoryId: number;

  @ApiModelProperty()
  @IsInt()
  @Column({ nullable: true }) supplierId: number;

  // Relation
  @ManyToOne(type => Category, category => category.products)
  @JoinColumn()
  category: Category;

  @ManyToOne(type => Supplier, supplier => supplier.products)
  @JoinColumn()
  supplier: Supplier;

  @OneToMany(type => OrderDetail, orderDetail => orderDetail.product)
  orderDetails: OrderDetail[];
}
