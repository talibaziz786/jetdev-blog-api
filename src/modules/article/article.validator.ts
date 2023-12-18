import { Injectable } from '@nestjs/common';

// Utils
import PlatformError from './../../utils/platformError';
import ValidatorHelper from './../../utils/validator.helper';

// Dto
import { CreateArticleDto, CreateArticleCommentDto } from './dto/article.dto';

@Injectable()
export class ArticleValidator {
  /**
   *
   * @param body
   * @returns
   */
  createArticle(body: CreateArticleDto): any {
    const error: PlatformError = new PlatformError(400);
    if (ValidatorHelper.isNullOrUndefined(body.title)) {
      error.addParamError('Invalid or missing title');
    }
    if (ValidatorHelper.isNullOrUndefined(body.nickName)) {
      error.addParamError('Invalid or missing nickName');
    }
    if (ValidatorHelper.isNullOrUndefined(body.content)) {
      error.addParamError('Invalid or missing content');
    }
    return error;
  }
  /**
   *
   * @param body
   * @returns
   */
  createArticleComment(body: CreateArticleCommentDto): any {
    const error: PlatformError = new PlatformError(400);
    if (ValidatorHelper.isNullOrUndefined(body.nickName)) {
      error.addParamError('Invalid or missing nickName');
    }
    if (ValidatorHelper.isNullOrUndefined(body.content)) {
      error.addParamError('Invalid or missing content');
    }
    return error;
  }
}
