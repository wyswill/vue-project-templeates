import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { DbProvider } from "@libs/lib/db/dbProvider";

@Injectable()
export class Auth implements CanActivate {
  constructor(protected readonly db: DbProvider) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const { token } = context.switchToHttp().getRequest().headers;
    if (!token || token === "") {
      return false;
    }
    const { loginInfo } = this.db.cacheMap;
    return loginInfo.get(token);
  }
}
