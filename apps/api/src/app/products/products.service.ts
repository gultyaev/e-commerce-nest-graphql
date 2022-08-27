import { Injectable } from '@nestjs/common';
import { Prisma, Product } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async getProduct(where: Prisma.ProductWhereUniqueInput): Promise<Product> {
    return this.prisma.product.findUnique({ where });
  }

  async getProducts(params: {
    where?: Prisma.ProductWhereInput;
  }): Promise<Product[]> {
    return this.prisma.product.findMany({
      where: params.where,
    });
  }

  async createProduct(data: Prisma.ProductCreateInput): Promise<Product> {
    return this.prisma.product.create({ data });
  }

  async updateProduct(params: {
    where: Prisma.ProductWhereUniqueInput;
    data: Prisma.ProductUpdateInput;
  }): Promise<Product> {
    const { where, data } = params;

    return this.prisma.product.update({
      where,
      data,
    });
  }

  async deleteProduct(where: Prisma.ProductWhereUniqueInput): Promise<Product> {
    return this.prisma.product.delete({
      where,
    });
  }
}
