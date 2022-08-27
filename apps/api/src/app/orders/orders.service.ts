import { Injectable } from '@nestjs/common';
import { Order, Prisma } from '@prisma/client';
import { OrderStatus } from '../../graphql';
import { PrismaService } from '../prisma/prisma.service';
import { CreateOrderDto } from './orders.dto';

const includeClause: Prisma.OrderInclude = {
  products: {
    include: {
      product: true,
    },
  },
};

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  getOrder(where: Prisma.OrderWhereUniqueInput): Promise<Order> {
    return this.prisma.order.findUnique({
      where,
      include: includeClause,
    });
  }

  getOrders(params: {
    where?: Prisma.OrderWhereUniqueInput;
  }): Promise<Order[]> {
    return this.prisma.order.findMany({
      where: params.where,
      include: includeClause,
    });
  }

  createOrder(order: CreateOrderDto): Promise<Order> {
    const { fullName, orderedProducts, paymentMethod, shippingAddress } = order;

    return this.prisma.order.create({
      data: {
        fullName,
        paymentMethod,
        shippingAddress,
        status: OrderStatus.NEW,
        products: {
          create: orderedProducts.map((e) => ({
            count: e.count,
            productId: e.productId,
          })),
        },
      },
      include: includeClause,
    });
  }

  updateOrder(id: number, newStatus: OrderStatus): Promise<Order> {
    return this.prisma.order.update({
      where: {
        id,
      },
      data: {
        status: newStatus,
      },
      include: includeClause,
    });
  }
}
