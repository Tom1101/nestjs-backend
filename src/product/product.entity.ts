import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Category } from '../category/category.entity';
import { Supplier } from '../supplier/supplier.entity';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

@Entity()
export class Product {
  @ApiModelProperty()
  @IsInt()
  @PrimaryGeneratedColumn() id: number;

  @ApiModelProperty()
  @IsString()
  @Column() name: string;

  @ApiModelProperty()
  @IsInt()
  @Column() quantity: number;

  @ApiModelProperty()
  @IsInt()
  @Column() price: number;

  @ApiModelProperty()
  @IsString()
  @Column() status: boolean;
  // Relation
  @ManyToOne(type => Category, category => category.products)
  category: Category;
  @ManyToOne(type => Supplier, supplier => supplier.products)
  supplier: Supplier;
}
