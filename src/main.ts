import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { format } from 'path';
import { FormatResponseInterceptor } from './format-response.interceptor';
import { FormatResponseFilter } from './format-response.filter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 全局validationPipe
  app.useGlobalPipes(new ValidationPipe());
  const configService = app.get(ConfigService);
  // 使用Winston日志
  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));
  // 使用响应拦截器
  app.useGlobalInterceptors(new FormatResponseInterceptor())
  // 使用过滤器
  app.useGlobalFilters(new FormatResponseFilter())
  // swagger接口文档
  const config = new DocumentBuilder()
      .setTitle(configService.get('swagger_title'))
      .setDescription(configService.get('swagger_description'))
      .setVersion(configService.get('swagger_version'))
      .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(configService.get('swagger_route'), app, document);
  await app.listen(configService.get('nest_server_port'));
}
bootstrap();
