import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): void {
    throw new HttpException('测试过滤器', HttpStatus.FORBIDDEN);
    // return this.appService.getHello();
  }
}
