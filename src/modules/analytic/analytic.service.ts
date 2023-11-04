import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Comment } from '../comment/models/comment.model';

@Injectable()
export class AnalyticService {
  constructor(
    @InjectModel(Comment) private readonly commentRepository: typeof Comment,
  ) {}

  async getCommentsByDate(dateFrom: string, dateTo: string) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { Op } = require('sequelize');
    return this.commentRepository.findAll({
      where: {
        createdAt: {
          [Op.gte]: dateFrom,
          [Op.lte]: dateTo,
        },
      },
    });
  }
}
