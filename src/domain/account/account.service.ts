import { Injectable } from '@nestjs/common';
import { CreateReq, UpdateReq } from './dio';
import { DbProvider } from '../../db/dbProvider';

@Injectable()
export class AccountService {
  constructor(protected readonly db: DbProvider) {}

  async createAccount({ userName, phone }: CreateReq) {}

  async update({ userName, newInfo }: UpdateReq) {}

  async deleteAccount(userName: string) {}
}
