// 时间格式化
export enum timeFmt {
  YMD_HMS = "YYYY-MM-DD HH:MM:SS",
  YMD     = "YYYY-MM-DD",
  file    = "YYYY-MM-DD_HH:MM:SS"
}

export const baseUrl = process.env.isDebug ? "http://localhost:3000" : "http://47.97.111.58:manghe/api";
export const staticUrlPreFix = `${baseUrl}/static`;
