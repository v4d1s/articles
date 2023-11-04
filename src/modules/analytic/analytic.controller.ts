import { Controller, Get, Query } from '@nestjs/common';
import { AnalyticService } from './analytic.service';

@Controller('analytic')
export class AnalyticController {
  constructor(private readonly commentService: AnalyticService) {}

  @Get('comments')
  getCommentsByDate(@Query() query: any) {
    return this.commentService.getCommentsByDate(query.dateFrom, query.dateTo);
  }
}
