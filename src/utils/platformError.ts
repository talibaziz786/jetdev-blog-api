export default class PlatformError {
  private errors: any;
  private code: number;

  public constructor(code: number) {
    this.errors = [];
    this.code = code;
  }

  public getErrorsArray(): any {
    return this.errors;
  }

  public isErrors(): any {
    return this.errors.length > 0;
  }

  public addParamError(message: string): any {
    this.errors.push({
      reason: 'invalidParameter',
      message,
    });

    return this;
  }

  public addPermError(message: string): any {
    this.errors.push({
      reason: 'invalidPermission',
      message,
    });

    return this;
  }

  public addServerError(message: string): any {
    this.errors.push({
      reason: 'serverError',
      message,
    });

    return this;
  }

  public addMongoError(message: string): any {
    this.errors.push({
      reason: 'dbError',
      message,
    });

    return this;
  }

  public addDbError(message: string): any {
    this.errors.push({
      reason: 'dbError',
      message,
    });

    return this;
  }

  public addCustomError(reason: string, message: string): any {
    this.errors.push({
      reason,
      message,
    });

    return this;
  }
  public getCode(): any {
    return this.code;
  }
}
