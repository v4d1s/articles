import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Comment } from './models/comment.model';
import { CreateCommentDTO } from './dto';

@Injectable()
export class CommentService {
  constructor(
    @InjectModel(Comment) private readonly commentRepository: typeof Comment,
  ) {}
  async getComments(articleId: number) {
    return this.commentRepository.findAll({ where: { articleId } });
  }

  async getCommentById(id: number) {
    return this.commentRepository.findOne({ where: { id } });
  }

  async createComment(
    articleId: number,
    dto: CreateCommentDTO,
  ): Promise<CreateCommentDTO> {
    const newComment = {
      text: dto.text,
      articleId: articleId,
    };
    await this.commentRepository.create(newComment);
    return dto;
  }

  async updateComment(id: number, dto: CreateCommentDTO) {
    await this.commentRepository.update(dto, { where: { id } });
    return dto;
  }

  async deleteComment(id: number) {
    return this.commentRepository.destroy({ where: { id } });
  }
}
