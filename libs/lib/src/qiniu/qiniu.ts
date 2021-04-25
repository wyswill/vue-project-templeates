import { UpFile } from "@Lotypes/index";
import { Injectable } from "@nestjs/common";
import qiniu from "qiniu";
import path from "path";
import fs from "fs";
import { logger } from "@util/log";
import request from "request";
import { DbProvider } from "@libs/lib/db/dbProvider";
import { qiniuConf } from "@util/config";

@Injectable()
export class Qiniu {
  constructor(private readonly db: DbProvider) {}
  filePrefix = "libs/lib/src/qiniu/";

  protected token;

  private getToken() {
    const putPolicy = new qiniu.rs.PutPolicy({ scope: qiniuConf.bucket });
    const accessKey = qiniuConf.accessKey;
    const secretKey = qiniuConf.secretKey;
    const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
    this.token = putPolicy.uploadToken(mac);
    return this.token;
  }

  protected async dowImg(imgUrl: string, filePath: string) {
    return new Promise<void>((resolve, reject) => {
      request({ url: imgUrl }).pipe(
        fs.createWriteStream(filePath).on("finish", () => {
          logger.info("下载完成");
          resolve();
        }),
      );
    });
  }

  protected async up2qiniu(
    base: string,
    filePath: string,
  ): Promise<string | undefined> {
    return new Promise((resolve, reject) => {
      const token = this.token ?? this.getToken();
      const config: any = new qiniu.conf.Config();
      config.zone = qiniu.zone.Zone_z2;
      const formUploader = new qiniu.form_up.FormUploader(config);
      const putExtra = new qiniu.form_up.PutExtra();
      const { url } = qiniuConf;
      formUploader.putFile(
        token,
        base,
        filePath,
        putExtra,
        function (respErr, respBody, respInfo) {
          if (respErr) {
            console.error(
              JSON.stringify({ status: "-1", msg: "上传失败", error: respErr }),
            );
            reject();
          }
          if (respInfo.statusCode == 200) {
            const imageSrc = `${url}/${respBody.key}`;
            console.info(
              JSON.stringify({
                status: "200",
                msg: "上传成功",
                imageUrl: imageSrc,
              }),
            );
            resolve(imageSrc);
          } else {
            console.error(
              JSON.stringify({
                status: "-1",
                msg: "上传失败",
                error: JSON.stringify(respBody),
              }),
            );
            reject();
          }
          fs.rmSync(filePath);
        },
      );
    });
  }

  async upImg(imgUrl: string): Promise<string | undefined> {
    logger.debug(`要下载的url:${imgUrl}`);
    if (!imgUrl) {
      return;
    }
    const { base } = path.parse(imgUrl);
    const filePath = path.resolve(`${this.filePrefix}${base}`);
    logger.debug(`文件下载地址:${filePath}`);
    await this.dowImg(imgUrl, filePath);
    const qiniuUrl = await this.up2qiniu(base, filePath);
    logger.debug(`七牛地址${qiniuUrl}`);
    return qiniuUrl;
  }

  async pushImg({ originalname, buffer }: UpFile) {
    const filePath = path.resolve(this.filePrefix + originalname);
    fs.writeFileSync(filePath, buffer);
    const qiniuUrl = await this.up2qiniu(originalname, filePath);
    logger.debug(`七牛地址${qiniuUrl}`);
    return qiniuUrl;
  }
}
