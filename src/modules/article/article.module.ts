import { Module } from '@nestjs/common';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Article } from './models/article.model';

@Module({
  imports: [ArticleModule, SequelizeModule.forFeature([Article])],
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class ArticleModule {}
