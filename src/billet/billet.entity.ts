import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { IsString, IsInt } from 'class-validator';
import { Customer } from '../customer/customer.entity';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class Billet {
  // Entities
  @ApiModelProperty()
  @IsInt()
  @PrimaryGeneratedColumn() id: number;

  @ApiModelProperty()
  @IsString()
  @Column() numero: string;

  @ApiModelProperty()
  @IsString()
  @Column() fromWhere: string;

  @ApiModelProperty()
  @IsString()
  @Column() toWhere: string;

  @ApiModelProperty()
  @Column() dateDepat: Date;

  @ApiModelProperty()
  @IsInt()
  @Column('time') timeDepart: number;

  @ApiModelProperty()
  @IsInt()
  @Column('time') timeArrival: number;

  // Relations
  @ManyToOne(type => Customer, customer => customer.billets)
  customer: Customer;
}
