import { Module }               from "@nestjs/common";
import { FileUploadController } from "./file-upload.controller";
import { FileUploadService }    from "./file-upload.service";
import { AppService }           from "../app/app.service";

@Module({
          controllers: [FileUploadController],
          providers  : [FileUploadService, AppService]
        })
export class FileUploadModule {}
