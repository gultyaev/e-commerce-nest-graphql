import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { CreateUserDto, UserDto } from './users.dto';

@Resolver('User')
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Mutation()
  async createUser(@Args('user') user: CreateUserDto) {
    const { email, password } = user;

    return this.usersService.createUser({
      email,
      password,
    });
  }

  @Mutation()
  async authenticateUser(@Args('user') user: UserDto) {
    const { email, password } = user;

    return this.usersService.authenticateUser({
      email,
      password,
    });
  }
}
