import { IsNumber, IsString, Min, MinLength } from 'class-validator';
import { OrderInput } from '../../graphql';

class OrderedProducts {
  @IsNumber()
  @Min(1)
  productId: number;

  @IsNumber()
  @Min(1)
  count: number;
}

export class CreateOrderDto extends OrderInput {
  @IsString()
  @MinLength(3)
  shippingAddress: string;

  @IsString()
  @MinLength(3)
  fullName: string;

  @IsString()
  paymentMethod: string;

  orderedProducts: OrderedProducts[];
}
