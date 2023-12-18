// Models
import { Article } from './models/article.entity';
import { ArticleComment } from './models/articleComment.entity';

export const AppProvider = [
  { provide: 'ARTICLE_REPOSITORY', useValue: Article },
  { provide: 'ARTICLE_COMMENT_REPOSITORY', useValue: ArticleComment },
];
