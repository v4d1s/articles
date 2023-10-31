import {Body, Controller, Delete, Get, Param, Patch, Post, Query} from '@nestjs/common';
import {ArticleService} from "./article.service";
import {CreateArticleDTO} from "./dto";
import {request} from "express";


@Controller('articles')
export class ArticleController {
    constructor(private readonly articleService: ArticleService) {}

    @Get()
    getArticles() {
        return this.articleService.getArticles()
    }

    @Get(':id')
    getArticle(@Param() params: any) {
        console.log(params.id)
        return this.articleService.getArticleById(params.id)
    }

    @Patch(':id')
    updateArticle(@Body() dto: CreateArticleDTO, @Param() params: any) {
        return this.articleService.updateArticle(params.id, dto)
    }

    @Delete(':id')
    deleteArticle(@Param() params: any) {
        return this.articleService.deleteArticle(params.id)
    }

    @Post('new')
    createArticles(@Body() dto: CreateArticleDTO) {
        console.log(dto)
        return this.articleService.createArticle(dto)
    }

}
