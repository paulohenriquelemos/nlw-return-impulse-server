import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "0bd6ed5f604acd",
    pass: "ce2007ed6aa086"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Paulo Henrique <pawlinhoh@gmail.com>',
      subject,
      html: body
    })
  };
}

// [
//   `<div style="font-family: sans-serif; font-size: 16px; color: #111">`,
//   `<p>Tipo do feedback: ${type}</p>`,
//   `<p>Comentário do feedback: ${comment}</p>`,
//   `</div>`
// ].join('\n')