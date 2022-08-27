import { Global, Module } from '@nestjs/common';
import { OrdersResolver } from './orders.resolver';
import { OrdersService } from './orders.service';

@Global()
@Module({
  providers: [OrdersService, OrdersResolver],
  exports: [],
})
export class OrdersModule {}
