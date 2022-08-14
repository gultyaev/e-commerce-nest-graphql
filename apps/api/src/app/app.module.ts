import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ProductsModule } from './products/products.module';
import { WarehouseModule } from './warehouse/warehouse.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import * as path from 'path';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { EnvironmentModule } from './environment/environment.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      csrfPrevention: true,
      definitions: {
        path: path.join(process.cwd(), 'apps/api/src/graphql.ts'),
        outputAs: 'class',
      },
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      cors: true,
    }),
    PrismaModule,
    ProductsModule,
    WarehouseModule,
    EnvironmentModule,
    UsersModule,
  ],
  providers: [AppService],
})
export class AppModule {}
