import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsString } from 'class-validator';

@Entity()
export class Seat {
  // Entities
  @ApiModelProperty()
  @IsInt()
  @PrimaryGeneratedColumn() id: number;

  @ApiModelProperty()
  @IsInt()
  @Column() numero: number;

  @ApiModelProperty()
  @IsString()
  @Column() location: string;

  @ApiModelProperty()
  @IsBoolean()
  @Column('boolean') isWorking: boolean;
  // Relations
}
