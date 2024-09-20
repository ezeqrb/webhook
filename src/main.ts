import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const logger = new Logger('AppBootstrap');
  app.useLogger(logger); // Define el logger global

  await app.listen(3000);
}
bootstrap();
