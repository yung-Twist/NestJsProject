import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe  } from '@nestjs/common'
import { HttpExceptionFilter } from './common/HttpException/http-exception.filter'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(new ValidationPipe(
    {
      // disableErrorMessages: true,// 禁止错误消息
      whitelist: true, // 自动过滤Dto中没有的参数
      //transform: true // 自动转换类型
    }
  ));// 管道验证
  app.enableCors();// 允许跨域
  await app.listen(3000);
}
bootstrap();
