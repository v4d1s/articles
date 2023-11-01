import { Module } from '@nestjs/common';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Comment } from './models/comment.model';
import { ArticleModule } from '../article/article.module';
import { ArticleService } from '../article/article.service';
import { ArticleController } from '../article/article.controller';
import { Article } from '../article/models/article.model';

@Module({
  imports: [
    ArticleModule,
    CommentModule,
    SequelizeModule.forFeature([Comment, Article]),
  ],
  controllers: [CommentController, ArticleController],
  providers: [CommentService, ArticleService],
})
export class CommentModule {}
