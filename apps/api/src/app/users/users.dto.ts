import { UserInput } from '../../graphql';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto extends UserInput {
  @IsString()
  @IsEmail()
  @MinLength(3)
  email: string;

  @IsString()
  @MinLength(6)
  password: string;
}

/**
 * User auth DTO
 */
export class UserDto {
  email: string;
  password: string;
}
