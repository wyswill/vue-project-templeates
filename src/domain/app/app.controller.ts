import { Controller, Get, Session } from '@nestjs/common';
import LibService                   from '@app/app/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: LibService) {}

  @Get('queryAuthCode')
  getCode(@Session() session: Record<string, any>) {
    const code: number = this.appService.authCode();
    session.code = code;
    return code;
  }
}
