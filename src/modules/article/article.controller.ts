import { Controller, Get, Post, Res, Body, Param, Query } from '@nestjs/common';
import { Response } from 'express';
import { ApiQuery } from '@nestjs/swagger';

// Utils
import PlatformError from './../../utils/platformError';
import CommonHelper from './../../utils/common.helper';
import ValidatorHelper from './../../utils/validator.helper';

// Services
import { ArticleService } from './article.service';

// Validators
import { ArticleValidator } from './article.validator';

// Dto
import {
  CreateArticleDto,
  CreateArticleCommentDto,
  ArticleQuery,
} from './dto/article.dto';

@Controller('articles')
export class ArticleController {
  constructor(
    private readonly articleService: ArticleService,
    private readonly articleValidator: ArticleValidator,
  ) {}

  @Get('/')
  @ApiQuery({ name: 'page', required: false })
  async getArticles(
    @Query() articleQuery: ArticleQuery,
    @Res() res: Response,
  ): Promise<any> {
    try {
      const { data, totalCount } = await this.articleService.getArticles(
        articleQuery,
      );
      return res.status(200).json({ data, totalCount });
    } catch (error) {
      CommonHelper.consoleLog('ArticleController:getArticles:error:', error);
      if (error instanceof PlatformError) {
        return res.status(error.getCode()).json(error);
      } else {
        return res
          .status(500)
          .json(
            new PlatformError(500).addServerError(
              'Unable to process your request',
            ),
          );
      }
    }
  }

  @Get('/:articleId')
  async getArticle(
    @Param('articleId') articleId: number,
    @Res() res: Response,
  ): Promise<any> {
    try {
      const articleInfo = await this.articleService.getArticle(articleId);
      if (ValidatorHelper.isNullOrUndefined(articleInfo)) {
        throw new PlatformError(400).addParamError('Invalid articleId');
      }
      return res.status(200).json(articleInfo);
    } catch (error) {
      CommonHelper.consoleLog('ArticleController:getArticle:error:', error);
      if (error instanceof PlatformError) {
        return res.status(error.getCode()).json(error);
      } else {
        return res
          .status(500)
          .json(
            new PlatformError(500).addServerError(
              'Unable to process your request',
            ),
          );
      }
    }
  }

  @Post('/')
  async createArticle(
    @Body() createArticleDto: CreateArticleDto,
    @Res() res: Response,
  ): Promise<any> {
    try {
      const error: PlatformError =
        this.articleValidator.createArticle(createArticleDto);
      if (error.isErrors()) {
        throw error;
      }
      const data = await this.articleService.createArticle(createArticleDto);
      return res.status(200).json(data);
    } catch (e) {
      CommonHelper.consoleLog('ArticleController:createArticle:error:', e);
      if (e instanceof PlatformError) {
        return res.status(e.getCode()).json(e);
      } else {
        return res
          .status(500)
          .json(
            new PlatformError(500).addServerError(
              'Unable to process your request',
            ),
          );
      }
    }
  }

  @Get('/:articleId/comments')
  async getArticleComments(
    @Param('articleId') articleId: number,
    @Res() res: Response,
  ): Promise<any> {
    try {
      const articleInfo = await this.articleService.getArticle(articleId);
      if (ValidatorHelper.isNullOrUndefined(articleInfo)) {
        throw new PlatformError(400).addParamError('Invalid articleId');
      }
      const { data, totalCount } = await this.articleService.getArticleComments(
        articleId,
      );
      return res.status(200).json({ data, totalCount });
    } catch (error) {
      CommonHelper.consoleLog(
        'ArticleController:getArticleComments:error:',
        error,
      );
      if (error instanceof PlatformError) {
        return res.status(error.getCode()).json(error);
      } else {
        return res
          .status(500)
          .json(
            new PlatformError(500).addServerError(
              'Unable to process your request',
            ),
          );
      }
    }
  }

  @Post('/:articleId/comments')
  async createArticleComment(
    @Param('articleId') articleId: number,
    @Body() createArticleCommentDto: CreateArticleCommentDto,
    @Res() res: Response,
  ): Promise<any> {
    try {
      const articleInfo = await this.articleService.getArticle(articleId);
      if (ValidatorHelper.isNullOrUndefined(articleInfo)) {
        throw new PlatformError(400).addParamError('Invalid articleId');
      }
      if (
        ValidatorHelper.isNotUndefinedAndNull(
          createArticleCommentDto.parentCommentId,
        ) &&
        createArticleCommentDto.parentCommentId
      ) {
        const parentCommentInfo = await this.articleService.getArticleComments(
          createArticleCommentDto.parentCommentId,
        );
        if (ValidatorHelper.isNullOrUndefined(parentCommentInfo)) {
          throw new PlatformError(400).addParamError('Invalid parentCommentId');
        }
      }
      const data = await this.articleService.createArticleComment({
        articleId,
        ...createArticleCommentDto,
      });
      return res.status(200).json(data);
    } catch (error) {
      CommonHelper.consoleLog(
        'ArticleController:createArticleComments:error:',
        error,
      );
      if (error instanceof PlatformError) {
        return res.status(error.getCode()).json(error);
      } else {
        return res
          .status(500)
          .json(
            new PlatformError(500).addServerError(
              'Unable to process your request',
            ),
          );
      }
    }
  }
}
