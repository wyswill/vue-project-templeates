import { Injectable }               from "@nestjs/common";
import * as path                    from "path";
import * as fs                      from "fs";
import { BaseResponse, getTime }   from "../../utiles";
import { staticUrlPreFix, timeFmt } from "src/utiles/constant";
import { AppService }               from "../app/app.service";

@Injectable()
export class FileUploadService {
  constructor(protected readonly commService: AppService) {}

  async saveFile(file: File[]) {
    const urls = [];
    file.forEach(f => {
      const filePath = path.resolve(__dirname, "../../static");
      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath);
      }
      const hash = this.commService.authCode();
      const fileName = `_${hash}_${getTime(timeFmt.file)}${path.parse(f["originalname"]).ext}`;
      fs.writeFileSync(`${filePath}/${fileName}`, f["buffer"]);
      urls.push(`${staticUrlPreFix}/${fileName}`);
    });
    return new BaseResponse(0, "上传成功", urls.join());
  }
}
