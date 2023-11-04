import { Module } from '@nestjs/common';
import { AnalyticController } from './analytic.controller';
import { AnalyticService } from './analytic.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Comment } from '../comment/models/comment.model';

@Module({
  imports: [SequelizeModule.forFeature([Comment])],
  controllers: [AnalyticController],
  providers: [AnalyticService],
})
export class AnalyticModule {}
