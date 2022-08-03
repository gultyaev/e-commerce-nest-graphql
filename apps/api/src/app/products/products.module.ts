import { Global, Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsResolver } from './products.resolver';

@Global()
@Module({
  providers: [ProductsService, ProductsResolver],
  exports: [ProductsService],
})
export class ProductsModule {}
