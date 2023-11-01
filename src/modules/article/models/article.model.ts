import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { Comment } from '../../comment/models/comment.model';

@Table
export class Article extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
  @Column
  name: string;
  @Column
  text: string;
  @HasMany(() => Comment, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  commentList: Comment[];
}
