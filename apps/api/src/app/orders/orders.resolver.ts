import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { OrderStatus } from '../../graphql';
import { GqlAuthGuard } from '../auth/gql-auth.guard';
import { CreateOrderDto } from './orders.dto';
import { OrdersService } from './orders.service';

@Resolver()
export class OrdersResolver {
  constructor(private ordersService: OrdersService) {}

  @UseGuards(GqlAuthGuard)
  @Query()
  order(id: number) {
    return this.ordersService.getOrder({
      id,
    });
  }

  @UseGuards(GqlAuthGuard)
  @Query()
  orders() {
    return this.ordersService.getOrders({});
  }

  @Mutation()
  createOrder(@Args('order') order: CreateOrderDto) {
    return this.ordersService.createOrder(order);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation()
  updateOrder(
    @Args('id') id: number,
    @Args('newStatus') newStatus: OrderStatus
  ) {
    return this.ordersService.updateOrder(id, newStatus);
  }
}
