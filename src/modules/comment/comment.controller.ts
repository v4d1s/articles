import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDTO } from './dto';
import { ArticleService } from '../article/article.service';

@Controller('article/:id/')
export class CommentController {
  constructor(
    private readonly commentService: CommentService,
    private readonly articleService: ArticleService,
  ) {}

  @Get('comments')
  getComments(@Param() params: any) {
    return this.commentService.getComments(params.id);
  }

  @Get('comment/:commentId')
  getComment(@Param() params: any) {
    return this.commentService.getCommentById(params.commentId);
  }

  @Post('comment')
  async createComment(@Body() dto: CreateCommentDTO, @Param() params: any) {
    const article = await this.articleService.getArticleById(params.id);
    if (!article) {
      throw new BadRequestException('This article does not exist');
    }
    return this.commentService.createComment(params.id, dto);
  }

  @Patch('comment/:commentId')
  updateComment(@Body() dto: CreateCommentDTO, @Param() params: any) {
    return this.commentService.updateComment(params.commentId, dto);
  }

  @Delete('comment/:commentId')
  deleteComment(@Param() params: any) {
    return this.commentService.deleteComment(params.commentId);
  }
}
