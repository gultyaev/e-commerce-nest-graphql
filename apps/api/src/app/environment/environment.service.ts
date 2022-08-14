import { Injectable } from '@nestjs/common';

@Injectable()
export class EnvironmentService {
  get passwordSalt(): string {
    return process.env.USER_PASSWORD_SALT;
  }
}
