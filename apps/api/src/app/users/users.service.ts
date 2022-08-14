import { Injectable, NotFoundException } from '@nestjs/common';
import { EnvironmentService } from '../environment/environment.service';
import { PrismaService } from '../prisma/prisma.service';
import { JWT, NewUser } from '../../graphql';
import { Prisma } from '@prisma/client';
import * as crypto from 'crypto';
import { UserDto } from './users.dto';

@Injectable()
export class UsersService {
  constructor(
    private environment: EnvironmentService,
    private prisma: PrismaService
  ) {}

  async createUser(data: Prisma.UserCreateInput): Promise<NewUser> {
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

  async authenticateUser(data: UserDto): Promise<JWT> {
    const { email, password } = data;

    const user = await this.prisma.user.findFirst({
      where: {
        email,
        password: this.getPasswordHash(password),
      },
    });

    if (!user) {
      throw new NotFoundException('No such user');
    }

    return {
      // TODO replace with JWT creation logic
      // TODO require authentication for data mutations
      accessToken: 'token',
    };
  }

  private getPasswordHash(password: string): string {
    const hmac = crypto.createHmac('sha256', this.environment.passwordSalt);
    return hmac.update(password).digest('hex');
  }
}
