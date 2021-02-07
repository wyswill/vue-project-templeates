import { HttpException }            from '@nestjs/common';
import {
  Body,
  Controller,
  Post,
  UseGuards,
  Headers,
  Get,
  Query,
  Session
}                                   from '@nestjs/common';
import { LoginService }             from './login.service';
import { LoginReq, LoginWithToken } from './dto';
import { Auth }                     from '../auth/auth.service';
import { logger }                   from 'src/utiles';

@Controller('login')
export class LoginController {
  constructor(protected service: LoginService) {}

  @Get('/')
  async login(
    @Query() loginInfo: LoginReq,
    @Session() session: Record<string, any>
  ) {
    return this.service.login(loginInfo, session['code']);
  }

  @Post('loginByToken')
  @UseGuards(Auth)
  async loginByToken(
    @Headers('token') token: string,
    @Body() userInfo: LoginWithToken
  ) {
    return this.service.loginByToken(token, userInfo.phone);
  }

  @Post('logOut')
  @UseGuards(Auth)
  async logOut(
    @Headers('token') token: string,
    @Body() userInfo: LoginWithToken
  ) {
    return this.service.logOut(token, userInfo.phone);
  }
}
