import { singleton } from "@undb/di"
import { env } from "@undb/env"
import { createLogger } from "@undb/logger"
import { IMailService, ISendInput } from "@undb/mail"
import { createTransport } from "nodemailer"
import { compile } from "./templates/compile"

function createMailerTransport() {
  return createTransport({
    host: env.UNDB_MAIL_HOST,
    port: parseInt(env.UNDB_MAIL_PORT, 10),
  })
}

@singleton()
export class NodemailerService implements IMailService {
  logger = createLogger(NodemailerService.name)
  private readonly transport = createMailerTransport()

  async send(input: ISendInput): Promise<void> {
    await this.transport.sendMail({
      from: input.from || env.UNDB_MAIL_DEFAULT_FROM,
      to: input.to,
      subject: input.subject,
      html: await compile(input.template, input.data),
    })
  }
}