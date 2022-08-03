import { WarehouseInput } from '../../graphql';
import { IsString, MinLength } from 'class-validator';

export class CreateWarehouseDto extends WarehouseInput {
  @IsString()
  @MinLength(3)
  title: string;
}
