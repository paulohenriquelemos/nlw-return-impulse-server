import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbacksRepository } from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements FeedbacksRepository {
  async create({ type, comment, screenshot }: FeedbackCreateData) {
    await prisma.feedback.create({
      data: {
        // "type: type,"" <- quando uma chave é igual a variável, pode escrever da forma short
        type,
        // comment: comment,
        comment,
        // screenshot: screenshot
        screenshot
      }
    })
  }
}