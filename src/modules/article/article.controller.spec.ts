import { Test, TestingModule } from '@nestjs/testing';
import { Request, Response } from 'express';

import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';

// Models
import { Article } from './../../models/article.entity';
import { ArticleComment } from './../../models/articleComment.entity';

// Validators
import { ArticleValidator } from './article.validator';

describe('ArticleController', () => {
  let articleController: ArticleController;
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
  const requestMock = {
    query: {},
  } as unknown as Request;
  const responseMock = {
    status: jest.fn((x) => ({
      json: jest.fn((y) => y),
    })),
    json: jest.fn((x) => x),
  } as unknown as Response;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ArticleController],
      providers: [
        ArticleService,
        ArticleValidator,
        { provide: 'ARTICLE_REPOSITORY', useValue: Article },
        { provide: 'ARTICLE_COMMENT_REPOSITORY', useValue: ArticleComment },
      ],
    }).compile();

    articleService = app.get<ArticleService>(ArticleService);
    articleController = app.get<ArticleController>(ArticleController);
  });

  it('Should be defined', () => {
    expect(articleController).toBeDefined();
  });

  describe('getArticles', () => {
    it('should return data and totalCount"', async () => {
      jest
        .spyOn(articleService, 'getArticles')
        .mockImplementation(() => paginatedResponse);
      const resp = await articleController.getArticles(
        { page: 1 },
        responseMock,
      );
      expect(resp).toHaveProperty('data');
      expect(resp).toHaveProperty('totalCount');
    });
  });
  describe('getArticle', () => {
    it('should return an object', async () => {
      jest
        .spyOn(articleService, 'getArticle')
        .mockImplementation(() => articleInfo);
      const resp = await articleController.getArticle(1, responseMock);
      expect(resp).toHaveProperty('id');
      expect(resp).toBe(articleInfo);
    });
  });
  describe('createArticle', () => {
    it('should return an object', async () => {
      jest
        .spyOn(articleService, 'createArticle')
        .mockImplementation(() => articleInfo);
      const resp = await articleController.createArticle(
        articleInfo,
        responseMock,
      );
      expect(resp).toHaveProperty('id');
      expect(resp).toBe(articleInfo);
    });
  });
  describe('getArticleComments', () => {
    it('should return data and totalCount', async () => {
      jest
        .spyOn(articleService, 'getArticle')
        .mockImplementation(() => articleInfo);
      jest
        .spyOn(articleService, 'getArticleComments')
        .mockImplementation(() => paginatedResponse);
      const resp = await articleController.getArticleComments(1, responseMock);
      expect(resp).toHaveProperty('data');
      expect(resp).toHaveProperty('totalCount');
    });
  });
  describe('createArticleComment', () => {
    it('should return an object', async () => {
      jest
        .spyOn(articleService, 'getArticle')
        .mockImplementation(() => articleInfo);
      jest
        .spyOn(articleService, 'createArticleComment')
        .mockImplementation(() => commentInfo);
      const resp = await articleController.createArticleComment(
        1,
        commentInfo,
        responseMock,
      );
      expect(resp).toHaveProperty('id');
      expect(resp).toBe(commentInfo);
    });
  });
});
