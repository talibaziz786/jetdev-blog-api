import { Module } from '@nestjs/common';

// Controllers
import { ArticleController } from './article.controller';

// Services
import { ArticleService } from './article.service';

// Validators
import { ArticleValidator } from './article.validator';

// Providers
import { AppProvider } from './../../app.provider';

@Module({
  imports: [],
  controllers: [ArticleController],
  providers: [ArticleService, ArticleValidator, ...AppProvider],
})
export class ArticleModule {}
