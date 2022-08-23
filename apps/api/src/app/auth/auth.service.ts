import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JWT, User } from '../../graphql';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  validateUser(
    email: string,
    password: string
  ): Promise<Omit<User, 'password'> | null> {
    return this.usersService.validateUser(email, password);
  }

  login(user: Omit<User, 'password'>): JWT {
    return {
      accessToken: this.jwtService.sign({
        username: user.email,
        sub: user.id,
      }),
    };
  }
}
