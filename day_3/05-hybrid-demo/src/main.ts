import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS for development
  app.enableCors();
  
  const port = process.env.PORT || 3005;
  await app.listen(port);
  
  console.log('🚀 Hybrid Demo API running on http://localhost:' + port);
  console.log('📊 Architecture: Prisma (PostgreSQL) + Mongoose (MongoDB)');
  console.log('🔗 Cross-database operations available');
}
bootstrap();
