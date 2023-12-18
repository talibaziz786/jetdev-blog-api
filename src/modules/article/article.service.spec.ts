import { Test, TestingModule } from '@nestjs/testing';

import { ArticleService } from './article.service';

// Models
import { Article } from './../../models/article.entity';
import { ArticleComment } from './../../models/articleComment.entity';

describe('ArticleService', () => {
  let articleService: ArticleService;

  const articleInfo: any = {
    id: 1,
    title: 'Article 1',
    nickName: 'article',
    content: 'Article 1 content',
  };
  const commentInfo: any = {
    id: 1,
    articleId: 1,
    nickName: 'comment',
    content: 'comment 1',
  };

  const paginatedResponse: any = { rows: [], totalCount: 10 };

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [],
      providers: [
        ArticleService,
        { provide: 'ARTICLE_REPOSITORY', useValue: Article },
        { provide: 'ARTICLE_COMMENT_REPOSITORY', useValue: ArticleComment },
      ],
    }).compile();

    articleService = app.get<ArticleService>(ArticleService);
  });

  it('Should be defined', () => {
    expect(articleService).toBeDefined();
  });

  describe('getArticles', () => {
    it('Should return data and totalCount', async () => {
      jest
        .spyOn(Article, 'findAndCountAll')
        .mockImplementation(() => paginatedResponse);
      const resp = await articleService.getArticles({ page: 1 });
      expect(resp).toHaveProperty('data');
      expect(resp).toHaveProperty('totalCount');
    });
  });
  describe('getArticle', () => {
    it('Should return an object', async () => {
      jest.spyOn(Article, 'findOne').mockImplementation(() => articleInfo);
      const resp = await articleService.getArticle(1);
      expect(resp).toHaveProperty('id');
    });
  });
  describe('createArticle', () => {
    it('Should return an object', async () => {
      jest.spyOn(Article, 'create').mockImplementation(() => articleInfo);
      const resp = await articleService.createArticle(articleInfo);
      expect(resp).toHaveProperty('id');
    });
  });
  describe('getArticleComments', () => {
    it('Should return data and totalCount', async () => {
      jest
        .spyOn(ArticleComment, 'findAndCountAll')
        .mockImplementation(() => paginatedResponse);
      const resp = await articleService.getArticleComments(1);
      expect(resp).toHaveProperty('data');
      expect(resp).toHaveProperty('totalCount');
    });
  });
  describe('getArticleCommentById', () => {
    it('Should return an object', async () => {
      jest
        .spyOn(ArticleComment, 'findOne')
        .mockImplementation(() => commentInfo);
      const resp = await articleService.getArticleCommentById(commentInfo);
      expect(resp).toHaveProperty('id');
    });
  });
  describe('createArticleComment', () => {
    it('Should return an object', async () => {
      jest
        .spyOn(ArticleComment, 'create')
        .mockImplementation(() => articleInfo);
      const resp = await articleService.createArticleComment(commentInfo);
      expect(resp).toHaveProperty('id');
    });
  });
});
