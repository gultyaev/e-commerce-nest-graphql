import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { WarehouseService } from '../warehouse/warehouse.service';
import { Product } from '@prisma/client';
import { CreateProductDto } from './products.dto';

@Resolver('Product')
export class ProductsResolver {
  constructor(
    private productsService: ProductsService,
    private warehouseService: WarehouseService
  ) {}

  @Query()
  async product(@Args('id') id: number) {
    return this.productsService.getProduct({
      id,
    });
  }

  @Query()
  async products() {
    return this.productsService.getProducts({});
  }

  @ResolveField()
  async warehouse(@Parent() product: Product) {
    const { warehouseId } = product;

    return this.warehouseService.getWarehouse({
      id: warehouseId,
    });
  }

  @Mutation()
  async updateProduct(
    @Args('id') id: number,
    @Args('product') product: CreateProductDto
  ) {
    const { quantity, title, warehouseId } = product;

    return this.productsService.updateProduct({
      where: {
        id,
      },
      data: {
        quantity,
        title,
        warehouse: {
          connect: {
            id: warehouseId,
          },
        },
      },
    });
  }

  @Mutation()
  async createProduct(@Args('product') product: CreateProductDto) {
    const { quantity, title, warehouseId } = product;

    return this.productsService.createProduct({
      quantity,
      title,
      warehouse: {
        connect: {
          id: warehouseId,
        },
      },
    });
  }
}
