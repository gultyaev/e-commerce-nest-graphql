import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { WarehouseService } from './warehouse.service';
import { Warehouse } from '@prisma/client';
import { ProductsService } from '../products/products.service';
import { CreateWarehouseDto } from './warehouse.dto';
import { Logger } from '@nestjs/common';

@Resolver('Warehouse')
export class WarehouseResolver {
  constructor(
    private warehouseService: WarehouseService,
    private productsService: ProductsService
  ) {}

  @Query()
  async warehouses() {
    return this.warehouseService.getWarehouses({});
  }

  @Query()
  async warehouse(@Args('id') id: number) {
    return this.warehouseService.getWarehouse({
      id,
    });
  }

  @ResolveField()
  async products(@Parent() warehouse: Warehouse) {
    const { id } = warehouse;

    return this.productsService.getProducts({
      where: {
        warehouseId: id,
      },
    });
  }

  @Mutation()
  async addWarehouse(@Args('warehouse') warehouse: CreateWarehouseDto) {
    const { title } = warehouse;

    Logger.log(warehouse);

    return this.warehouseService.createWarehouse({
      title,
    });
  }

  @Mutation()
  async updateWarehouse(
    @Args('id') id: number,
    @Args('warehouse') warehouse: CreateWarehouseDto
  ) {
    const { title } = warehouse;

    return this.warehouseService.updateWarehouse({
      where: {
        id,
      },
      data: {
        title,
      },
    });
  }
}
