import { IsString } from 'class-validator';

export class CreateArticleDTO {
  @IsString()
  name: string;
  @IsString()
  text: string;
}
