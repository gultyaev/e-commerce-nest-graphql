import { Module } from '@nestjs/common';

import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import * as path from 'path';
import { AuthModule } from './auth/auth.module';
import { EnvironmentModule } from './environment/environment.module';
import { OrdersModule } from './orders/orders.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { WarehouseModule } from './warehouse/warehouse.module';

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
    AuthModule,
    OrdersModule,
  ],
})
export class AppModule {}
