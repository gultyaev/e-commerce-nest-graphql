import {INestApplication, Injectable, OnModuleInit, Scope} from '@nestjs/common';
import {PrismaClient} from "@prisma/client";

@Injectable({scope: Scope.DEFAULT})
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit(): Promise<void> {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication): Promise<void> {
    this.$on('beforeExit', async () => {
      await app.close();
    })
  }
}
