import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: process.env.NODE_ENV === 'production' ? 'https://recrutajuninho.netlify.app' : 'http://localhost:3001',
    credentials: true,
  });
  app.use(cookieParser(process.env.COOKIE_SECRET));
  await app.listen(3000);
}
bootstrap();
