import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable }                                from 'rxjs';
import { CacheService }                              from '@app/app/db/cache.service';

@Injectable()
export class Auth implements CanActivate {
  constructor(protected readonly cache: CacheService) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const {token} = context.switchToHttp().getRequest().headers;
    if (!token || token === '') {
      return false;
    }
    return this.cache.get(token);
  }
}
