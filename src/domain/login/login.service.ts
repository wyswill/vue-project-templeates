import { logger } from './../../utiles/index';
import { Injectable } from '@nestjs/common';
import { DbProvider } from '../../db/dbProvider';
import { CacheService } from '../../db/cache.service';
import { LoginReq } from './dto';
import { AppService } from '../app/app.service';

@Injectable()
export class LoginService {
  constructor(
    protected readonly db: DbProvider,
    protected readonly cache: CacheService,
    protected readonly commService: AppService,
  ) {}

  async login({ phone, code }: LoginReq, sessionCode: string) {}

  async loginByToken(token: string, phone: string) {}

  async logOut(token: string, userName: string) {}
}
