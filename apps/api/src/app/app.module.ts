import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ProductsModule } from './products/products.module';
import { WarehouseModule } from './warehouse/warehouse.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import * as path from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: path.join(process.cwd(), 'apps/api/src/graphql.ts'),
        outputAs: 'class',
      },
      cors: true,
    }),
    PrismaModule,
    ProductsModule,
    WarehouseModule,
  ],
  providers: [AppService],
})
export class AppModule {}
