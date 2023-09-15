import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'https://recrutajuninho.netlify.app',
    credentials: true,
  });
  app.use(cookieParser('Super secreto'));
  await app.listen(3000);
}
bootstrap();
