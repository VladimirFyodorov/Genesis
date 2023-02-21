import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { authService } from './auth.service';
import { CookieService, Cookies } from './cookie.service';


@Injectable()
export class AuthMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    const userId = (CookieService.cookieParser(req) as Cookies)['X-Client-Id'];
    
    if (!authService.has(userId)) {
      await authService.update(userId);
    }
    next();
  }
}
