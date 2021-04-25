/*
 * @LastEditors: wyswill
 * @Description:
 * @Date: 2021-04-25 17:42:11
 * @LastEditTime: 2021-04-25 17:58:27
 */
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import { emailConf } from "@util/config";
class MailService {
  transport: Mail;

  constructor() {
    this.transport = nodemailer.createTransport({
      host: "smtp.qq.com",
      secure: true,
      port: 465,
      auth: emailConf,
    });
  }

  async sendMail(
    title: string,
    content: string,
    to: string = process.env.exceptionMail,
  ) {
    const opt: Mail.Options = {
      from: "1151373571@qq.com",
      to,
      subject: title,
      text: content,
    };
    await this.transport.sendMail(opt);
  }
}

export default new MailService();
