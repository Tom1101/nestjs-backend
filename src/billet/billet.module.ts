import { Module } from '@nestjs/common';
import { BilletController } from './billet.controller';
import { BilletService } from './billet.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BilletEntity } from './billet.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BilletEntity])],
  controllers: [BilletController],
  providers: [BilletService],
})
export class BilletModule {}
