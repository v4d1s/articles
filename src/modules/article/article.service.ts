import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Article } from './models/article.model';
import { CreateArticleDTO } from './dto';

@Injectable()
export class ArticleService {
  constructor(
    @InjectModel(Article) private readonly articleRepository: typeof Article,
  ) {}
  async createArticle(dto: CreateArticleDTO): Promise<CreateArticleDTO> {
    const newArticle = {
      name: dto.name,
      text: dto.text,
    };
    await this.articleRepository.create(newArticle);
    return dto;
  }

  async getArticles() {
    return this.articleRepository.findAll();
  }

  async getArticleById(id: number) {
    return this.articleRepository.findOne({ where: { id } });
  }

  async updateArticle(id: number, dto: CreateArticleDTO) {
    await this.articleRepository.update(dto, { where: { id } });
    return dto;
  }

  async deleteArticle(id: number) {
    return this.articleRepository.destroy({ where: { id } });
  }
}
