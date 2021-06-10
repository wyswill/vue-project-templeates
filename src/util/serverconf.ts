/*
 * @LastEditors: wyswill
 * @Description:
 * @Date: 2021-06-09 18:53:00
 * @LastEditTime: 2021-06-10 15:12:12
 */
export type baseOpt = {
  host: string;
  packages: string;
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
      packages: 'hero',
      service: 'hero_service',
    },
  },
};
