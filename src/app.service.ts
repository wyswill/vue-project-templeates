/*
 * @LastEditors: wyswill
 * @Description:
 * @Date: 2021-06-04 17:14:23
 * @LastEditTime: 2021-06-04 18:29:15
 */
import { Get, Inject, Injectable, OnModuleInit, Param } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { hero } from './rpc/bundle';

@Injectable()
export class AppService implements OnModuleInit {
  private heroesService: hero.HeroesService;

  constructor(@Inject('HERO_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.heroesService =
      this.client.getService<hero.HeroesService>('HeroesService');
  }

  getHero(parm:hero.Hero) {
    console.log(parm);
    
    return this.heroesService.findOne(parm);
  }
}
