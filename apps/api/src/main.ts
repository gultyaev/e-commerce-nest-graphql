/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { PrismaService } from './app/prisma/prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      forbidNonWhitelisted: true,
    })
  );

  const port = process.env.PORT || 3333;
  await app.listen(port);

  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  Logger.log(`🚀 Application is running on: http://localhost:${port}/graphql`);
}

bootstrap();
