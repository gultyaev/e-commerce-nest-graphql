import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Warehouse } from '@prisma/client';

@Injectable()
export class WarehouseService {
  constructor(private prisma: PrismaService) {}

  async getWarehouse(
    where: Prisma.WarehouseWhereUniqueInput
  ): Promise<Warehouse> {
    return this.prisma.warehouse.findUnique({ where });
  }

  async getWarehouses(params: {
    where?: Prisma.WarehouseWhereInput;
  }): Promise<Warehouse[]> {
    return this.prisma.warehouse.findMany(params);
  }

  async createWarehouse(data: Prisma.WarehouseCreateInput): Promise<Warehouse> {
    return this.prisma.warehouse.create({ data });
  }

  async updateWarehouse(params: {
    where: Prisma.WarehouseWhereUniqueInput;
    data: Prisma.WarehouseUpdateInput;
  }): Promise<Warehouse> {
    const { where, data } = params;

    return this.prisma.warehouse.update({
      where,
      data,
    });
  }

  async deleteWarehouse(
    where: Prisma.WarehouseWhereUniqueInput
  ): Promise<Warehouse> {
    return this.prisma.warehouse.delete({
      where,
    });
  }
}
