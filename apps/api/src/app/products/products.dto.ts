import { ProductInput } from '../../graphql';
import { IsNumber, IsString, Min, MinLength } from 'class-validator';

export class CreateProductDto extends ProductInput {
  @IsString()
  @MinLength(3)
  title: string;

  @IsNumber()
  @Min(0)
  quantity: number;

  @IsNumber()
  @Min(0)
  warehouseId: number;

  @IsString()
  @MinLength(3)
  img: string;
}
