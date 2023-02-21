import { Request } from 'express';

export interface Cookies {
  'X-Client-Id': string
};


export class CookieService {
  static cookieParser(req: Request): Object {
    const cookiesArr = req.headers.cookie?.split('; ') as String[];
    const cookiesArrArr = cookiesArr.map(str => str?.split('='));
    const cookies = Object.fromEntries(cookiesArrArr);
    return cookies;
  }

  static cookieSetter(req: Request, cookies: Object): void {
    const cookiesStr = Object.entries(cookies).map(([key, value]) => key + '=' + value).join('; ');
    req.headers.cookie = cookiesStr;
  }
}
