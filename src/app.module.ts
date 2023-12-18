import { Module } from '@nestjs/common';

// Modules
import { DatabaseModule } from './database/database.module';
import { ArticleModule } from './modules/article/article.module';

// Controllers
import { AppController } from './app.controller';

// Services
import { AppService } from './app.service';

// Providers
import { AppProvider } from './app.provider';

@Module({
  imports: [DatabaseModule, ArticleModule],
  controllers: [AppController],
  providers: [AppService, ...AppProvider],
})
export class AppModule {}
