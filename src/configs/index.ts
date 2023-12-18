// NPM modules
import * as dotenv from 'dotenv';
import * as path from 'path';
dotenv.config({
  path: path.resolve(__dirname, '../../.env'),
});

export interface ConfigInterface {
  APP_PORT: number;
  DB_USERNAME: string;
  DB_PASSWORD: string;
  DB_HOST: string;
  DB_PORT: number;
  DB_NAME: string;
}

export class Config implements ConfigInterface {
  public APP_PORT: number;
  public DB_USERNAME: string;
  public DB_PASSWORD: string;
  public DB_HOST: string;
  public DB_PORT: number;
  public DB_NAME: string;

  public constructor() {
    this.APP_PORT = Number(process.env.APP_PORT);
    this.DB_USERNAME = process.env.DB_USERNAME;
    this.DB_PASSWORD = process.env.DB_PASSWORD;
    this.DB_HOST = process.env.DB_HOST;
    this.DB_PORT = Number(process.env.DB_PORT);
    this.DB_NAME = process.env.DB_NAME;

    // Logs the env variables
    console.log('APP_PORT :', this.APP_PORT);
    console.log('DB_NAME :', this.DB_NAME);
    console.log('DB_HOST :', this.DB_HOST);
    console.log('DB_PORT :', this.DB_PORT);
  }
}
export default new Config();
