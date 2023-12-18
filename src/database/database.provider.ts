// NPM modules
import { Sequelize } from 'sequelize-typescript';

// Configs
import Config from './../configs/';

// Models
import { Article } from './../models/article.entity';
import { ArticleComment } from './../models/articleComment.entity';

const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      try {
        const sequelize = new Sequelize({
          dialect: 'mysql',
          host: Config.DB_HOST,
          port: Config.DB_PORT,
          username: Config.DB_USERNAME,
          password: Config.DB_PASSWORD,
          database: Config.DB_NAME,
          pool: {
            max: 10,
            min: 0,
            idle: 10000,
          },
          // logging: false,
          logging: function (str) {
            // do your own logging
            // console.log('DB QUERY:', str);
          },
        });
        sequelize.addModels([Article, ArticleComment]);
        return sequelize;
      } catch (e) {
        console.log('databaseProviders:error:', e);
        console.log('Exiting the app due to DB error');
        process.exit(1);
      }
    },
  },
];
export default databaseProviders;
