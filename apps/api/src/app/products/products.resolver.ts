import { UseGuards } from '@nestjs/common';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Product } from '@prisma/client';
import { GqlAuthGuard } from '../auth/gql-auth.guard';
import { WarehouseService } from '../warehouse/warehouse.service';
import { CreateProductDto } from './products.dto';
import { ProductsService } from './products.service';

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

  @UseGuards(GqlAuthGuard)
  @Mutation()
  async updateProduct(
    @Args('id') id: number,
    @Args('product') product: CreateProductDto
  ) {
    const { quantity, title, warehouseId, img } = product;

    return this.productsService.updateProduct({
      where: {
        id,
      },
      data: {
        quantity,
        title,
        img,
        warehouse: {
          connect: {
            id: warehouseId,
          },
        },
      },
    });
  }

  @UseGuards(GqlAuthGuard)
  @Mutation()
  async createProduct(@Args('product') product: CreateProductDto) {
    const { quantity, title, warehouseId, img } = product;

    return this.productsService.createProduct({
      quantity,
      title,
      img,
      warehouse: {
        connect: {
          id: warehouseId,
        },
      },
    });
  }
}
