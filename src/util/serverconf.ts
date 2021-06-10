/*
 * @LastEditors: wyswill
 * @Description:
 * @Date: 2021-06-09 18:53:00
 * @LastEditTime: 2021-06-10 11:34:32
 */
import path from 'path';
type baseOpt = {
  host: string;
  packge: string;
  filepath: string;
  service: string;
};
interface conf {
  server: {
    [k: string]: baseOpt;
  };
}
export const GrpcConfig: conf = {
  server: {
    hero_service: {
      host: 'localhsot:12312',
      packge: 'hero',
      service: 'hero_service',
      filepath: path.resolve('../rpc/hero.proto'),
    },
  },
};
