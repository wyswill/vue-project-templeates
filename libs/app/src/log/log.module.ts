import { Module }         from "@nestjs/common";
import { LogInterceptor } from "./log.interceptor";

@Module({
          providers: [LogInterceptor]
        })
export default class LogModule {}
