import {commonRequest} from '@/utils/request'
// 处理图片上传
export function getPic(){
    return commonRequest()+"/upload/img"
}
// 返回服务器路径
export function getUrl(){
    return commonRequest();
}