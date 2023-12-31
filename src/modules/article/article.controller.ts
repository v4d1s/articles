import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDTO } from './dto';

@Controller('')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get('articles')
  getArticles() {
    return this.articleService.getArticles();
  }

  @Get('article/:id')
  getArticle(@Param() params: any) {
    // console.log(params.id);
    return this.articleService.getArticleById(params.id);
  }

  @Patch('article/:id')
  updateArticle(@Body() dto: CreateArticleDTO, @Param() params: any) {
    return this.articleService.updateArticle(params.id, dto);
  }

  @Delete('article/:id')
  deleteArticle(@Param() params: any) {
    return this.articleService.deleteArticle(params.id);
  }

  @Post('article')
  createArticles(@Body() dto: CreateArticleDTO) {
    // console.log(dto);
    return this.articleService.createArticle(dto);
  }
}
