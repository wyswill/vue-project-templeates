import { IsNotEmpty, IsNotEmptyObject } from "class-validator";

export class CreateReq {
  @IsNotEmpty({ message: "用户名不能为空" })
  userName: string;
  @IsNotEmpty({ message: "手机号不能为空" })
  phone: string;
}

export class UpdateReq {
  @IsNotEmpty({ message: "用户名不能为空" })
  userName: string;
  @IsNotEmptyObject({ nullable: false }, { message: "新用户信息不能为空" })
  newInfo: {
    address: string;
    avatar: string;
    coinCount: number;
    coupon: string;
    likeBoxList: string;
    phone: string;
    rmbNum: number;
    userName: string;
  };
}

export class DeleteReq {
  @IsNotEmpty({ message: "用户名不能为空" })
  userName: string;
}
