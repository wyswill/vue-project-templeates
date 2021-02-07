import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { Auth }                              from "../auth/auth.service";
import { CreateReq, DeleteReq, UpdateReq }   from "./dio";
import { AccountService }                    from "./account.service";

@Controller("account")
export class AccountController {
  constructor(protected readonly service: AccountService) {}

  @Post("create")
  async create(@Body() req: CreateReq) {
    return this.service.createAccount(req);
  }

  @Post("update")
  @UseGuards(Auth)
  async update(@Body() userInfo: UpdateReq) {
    return this.service.update(userInfo);
  }

  @Post("delete")
  @UseGuards(Auth)
  async delete(@Body() { userName }: DeleteReq) {
    return this.service.deleteAccount(userName);
  }
}
