import { Injectable, Inject } from '@nestjs/common';

// Models
import { Article } from './../../models/article.entity';
import { ArticleComment } from './../../models/articleComment.entity';

@Injectable()
export class ArticleService {
  constructor(
    @Inject('ARTICLE_REPOSITORY') private readonly modelArticle: typeof Article,
    @Inject('ARTICLE_COMMENT_REPOSITORY')
    private readonly modelArticleComment: typeof ArticleComment,
  ) {}
  /**
   *
   * @returns
   */
  async getArticles(pQuery: any): Promise<any> {
    const { page = 1, pageSize = 20 } = pQuery;
    const offset = (page - 1) * pageSize;
    const limit = pageSize;
    const { rows, count } = await this.modelArticle.findAndCountAll({
      where: {},
      offset,
      limit,
    });
    return {
      data: rows,
      totalCount: count,
    };
  }
  /**
   *
   * @param articleId
   * @returns
   */
  getArticle(articleId: number): Promise<any> {
    return this.modelArticle.findOne({ where: { id: articleId } });
  }
  /**
   *
   * @param data
   * @returns
   */
  createArticle(data: any): any {
    return this.modelArticle.create(data);
  }
  /**
   *
   * @param articleId
   * @returns
   */
  async getArticleComments(articleId: number): Promise<any> {
    const { rows, count } = await this.modelArticleComment.findAndCountAll({
      where: { articleId },
    });
    return {
      data: rows,
      totalCount: count,
    };
  }
  /**
   *
   * @param id
   * @returns
   */
  getArticleCommentById(id: number): Promise<any> {
    return this.modelArticleComment.findOne({ where: { id } });
  }
  /**
   *
   * @param data
   * @returns
   */
  createArticleComment(data: any): any {
    return this.modelArticleComment.create(data);
  }
}
