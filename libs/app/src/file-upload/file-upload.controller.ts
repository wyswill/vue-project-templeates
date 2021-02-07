import { Controller, Post, UploadedFiles, UseGuards, UseInterceptors } from "@nestjs/common";
import { FileUploadService }                                           from "./file-upload.service";
import { FilesInterceptor }                                            from "@nestjs/platform-express";
import { Auth }                                                        from '@app/app/auth/auth.service';

@Controller("file-upload")
export class FileUploadController {
  constructor(protected readonly service: FileUploadService) {
  }

  @Post()
  @UseInterceptors(FilesInterceptor("file"))
  @UseGuards(Auth)
  uploadFile(@UploadedFiles() file: File[]) {
    return this.service.saveFile(file);
  }
}
