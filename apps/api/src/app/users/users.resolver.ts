import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { CreateUserDto, UserDto } from './users.dto';
import { AuthService } from '../auth/auth.service';
import { UnauthorizedException } from '@nestjs/common';

@Resolver('User')
export class UsersResolver {
  constructor(
    private usersService: UsersService,
    private authService: AuthService
  ) {}

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
    const userData = await this.authService.validateUser(email, password);

    if (!userData) {
      throw new UnauthorizedException();
    }

    return this.authService.login(userData);
  }
}
