import { Controller, Get, Response, Session } from '@nestjs/common';
import { AppService }                         from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('queryAuthCode')
  getCode(@Session() session: Record<string, any>) {
    const code: number = this.appService.authCode();
    session.code = code;

    return code;
  }
}
