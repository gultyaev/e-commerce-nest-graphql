import { Global, Module } from '@nestjs/common';
import { WarehouseService } from './warehouse.service';
import { WarehouseResolver } from './warehouse.resolver';

@Global()
@Module({
  providers: [WarehouseService, WarehouseResolver],
  exports: [WarehouseService],
})
export class WarehouseModule {}
