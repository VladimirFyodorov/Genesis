import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { authService, Cookies } from './AuthService';
import { CookieService } from './CookieService';


@Injectable()
export class CookieMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    console.log('Cookie middleware triggered');
    const userId = (CookieService.cookieParser(req) as Cookies)['X-Client-Id'];
    await authService.update(userId);
    next();
  }
}
