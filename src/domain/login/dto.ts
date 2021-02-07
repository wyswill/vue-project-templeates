import { IsNotEmpty } from 'class-validator';

export class LoginReq {
  @IsNotEmpty({ message: '手机号不能为空' })
  phone: string;
  @IsNotEmpty({ message: '验证码不能为空' })
  code: string;
}

export class LoginWithToken {
  @IsNotEmpty({ message: '手机号不能为空' })
  phone: string;
}
