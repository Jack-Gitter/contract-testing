import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { OpenApiNestFactory } from 'nest-openapi-tools';
import { DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({transform:true}));

  const config = new DocumentBuilder()
    .setTitle('Contract Testing')
    .setDescription('Contract Testing Application')
    .setVersion('1.0')
    .addTag('homes');

  await OpenApiNestFactory.configure(app, config, {
    webServerOptions: { enabled: true, path: 'api-docs' },
    fileGeneratorOptions: { enabled: true, outputFilePath: './openapi.json' },
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
