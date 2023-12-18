import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

// Configs
import Config from './configs';

// Utils
import CommonHelper from './utils/common.helper';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('api');

    const config = new DocumentBuilder()
      .setTitle('JetDev Blog API')
      .setDescription('JetDev Blog API')
      .setVersion('1.0')
      .addTag('JetDev Blog')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('swagger', app, document);

    app.listen(Config.APP_PORT, () => {
      CommonHelper.consoleLog('App is listening on port:', Config.APP_PORT);
    });
  } catch (e) {
    CommonHelper.consoleLog(
      'bootstrap:error:',
      CommonHelper.getPropValueFromObject(e, 'stack', e),
    );
    CommonHelper.consoleLog('Exiting the app due to bootstrap error');
    process.exit(1);
  }
}
bootstrap();
