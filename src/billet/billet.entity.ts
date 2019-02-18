import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { IsString, IsInt } from 'class-validator';
import { Customer } from '../customer/customer.entity';
import { ApiModelProperty } from '@nestjs/swagger';
import { SeatActive } from '../seat-active/seat-active.entity';

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
  @Column() dateDepart: string;

  @ApiModelProperty()
  @IsInt()
  @Column('time') timeDepart: number;

  @ApiModelProperty()
  @IsInt()
  @Column('time') timeArrival: number;

  @ApiModelProperty()
  @IsInt()
  @Column({ nullable: true }) customerId: number;

  // Relations
  @ManyToOne(type => Customer, customer => customer.billets)
  @JoinColumn()
  customer: Customer;
  @OneToMany(type => SeatActive, seatActive => seatActive.billet)
  seatActives: SeatActive[];
}
