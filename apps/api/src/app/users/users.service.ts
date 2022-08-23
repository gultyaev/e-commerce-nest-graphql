import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import * as crypto from 'crypto';
import { NewUser, User } from '../../graphql';
import { EnvironmentService } from '../environment/environment.service';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(
    private environment: EnvironmentService,
    private prisma: PrismaService
  ) {}

  createUser(data: Prisma.UserCreateInput): Promise<NewUser> {
    const { email, password } = data;

    return this.prisma.user.create({
      data: {
        email,
        password: this.getPasswordHash(password),
      },
      select: {
        id: true,
        email: true,
      },
    });
  }

  async validateUser(
    email: string,
    password: string
  ): Promise<Omit<User, 'password'> | null> {
    const user = await this.prisma.user.findFirst({
      where: {
        email,
        password: this.getPasswordHash(password),
      },
      select: {
        id: true,
        email: true,
      },
    });

    return user;
  }

  private getPasswordHash(password: string): string {
    const hmac = crypto.createHmac('sha256', this.environment.passwordSalt);
    return hmac.update(password).digest('hex');
  }
}
