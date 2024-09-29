import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*', //domain
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders:
      'Content-Type, Accept, Authorization, ngrok-skip-browser-warning',
  });

  await app.listen(3000); // Menjalankan aplikasi di port 3000
}
bootstrap();
