import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Article } from '../../article/models/article.model';

@Table
export class Comment extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
  @Column
  text: string;
  @ForeignKey(() => Article)
  articleId: number;
}
