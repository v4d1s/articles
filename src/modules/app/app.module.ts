import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from '../article/article.module';
import {ConfigModule, ConfigService} from "@nestjs/config";
import configurations from '../../configurations'
import { SequelizeModule } from "@nestjs/sequelize";
import {Article} from "../article/models/article.model";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configurations],
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        dialect: "postgres",
        host: configService.get('db_host'),
        port: configService.get('db_port'),
        database: configService.get('db_name'),
        username: configService.get('db_user'),
        password: configService.get('db_password'),
        synchronize: true,
        autoLoadModels: true,
        models: [Article],
      })
    }),
    ArticleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
