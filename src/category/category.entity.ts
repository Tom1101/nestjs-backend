import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Product } from '../product/product.entity';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';
import { Supplier } from '../supplier/supplier.entity';

@Entity()
export class Category {
  @ApiModelProperty()
  @IsInt()
  @PrimaryGeneratedColumn() id: number;

  @ApiModelProperty()
  @IsString()
  @Column() name: string;

  @ApiModelProperty()
  @IsString()
  @Column() description: string;

  @ApiModelProperty()
  @IsInt()
  @Column({ nullable: true }) supplierId: number;

  @ManyToOne(type => Supplier, supplier => supplier.categories)
  @JoinColumn()
  supplier: Supplier;

  @OneToMany(type => Product, product => product.category)
  products: Product[];
}
