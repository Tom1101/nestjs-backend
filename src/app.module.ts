import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerModule } from './customer/customer.module';
import { BilletModule } from './billet/billet.module';
import { SeatModule } from './seat/seat.module';
import { SeatActiveModule } from './seat-active/seat-active.module';
import { SeatActivityModule } from './seat-activity/seat-activity.module';
import { AuthModule } from './auth/auth.module';
import { OrderModule } from './order/order.module';
import { ShipperModule } from './shipper/shipper.module';
import { SupplierModule } from './supplier/supplier.module';
import { OrderDetailModule } from './order-detail/order-detail.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [TypeOrmModule.forRoot(), CustomerModule, BilletModule,
    SeatModule, SeatActiveModule, SeatActivityModule, AuthModule, OrderModule,
    ShipperModule, SupplierModule, OrderDetailModule, ProductModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
