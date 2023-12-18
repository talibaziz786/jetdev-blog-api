// NPM modules

class CommonHelper {
  public consoleLog(...pMessage: any): boolean {
    try {
      console.log(new Date().toISOString(), ' : ', ...pMessage);
    } catch (e) {
      console.log(new Date().toISOString(), ' : ', pMessage);
    }
    return null;
  }

  public extractNumbers(str: string): any {
    if (str) {
      const matches: any = str.match(/(\d+)/);
      if (matches) {
        return matches[0];
      }
    }
    return null;
  }
  public getPropValueFromObject(
    obj: any,
    prop: any,
    defaultVal: any = null,
  ): any | null {
    if (obj && obj[prop]) {
      return obj[prop];
    }
    return defaultVal;
  }
}

export default new CommonHelper();
