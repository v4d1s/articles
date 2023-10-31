import {IsDate, IsNumber, IsString} from "class-validator";
import {Column} from "sequelize-typescript";

export class CreateArticleDTO {
    // @IsNumber()
    // id: number
    @IsString()
    name: string
    @IsString()
    text: string
    // @IsDate()
    // createdAt: Date
    // @IsDate()
    // updatedAt: Date
}

