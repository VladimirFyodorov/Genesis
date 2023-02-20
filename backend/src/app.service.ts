import { Injectable, Req, Res } from '@nestjs/common';
import { Request } from 'express';
import axios from 'axios';
import { authService, AuthData, Cookies } from './AuthService';
import { CookieService } from './CookieService';


@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async auth(@Req() req: Request): Promise<AuthData> {
    const userId = (CookieService.cookieParser(req) as Cookies)['X-Client-Id'];
    const authData = authService.update(userId)
    return authData;
  }

  async postLead(@Req() req: Request): Promise<{ id: number, name: string }> {
    const userId = (CookieService.cookieParser(req) as Cookies)['X-Client-Id'];
    const authData = await authService.get(userId)

    const url = `https://${authData.base_domain}/api/v4/leads`;
    const token = authData.access_token;
    const name = "deal";
    const data = { "name": [name] };
    const config =  { headers: { "Authorization": "Bearer " + token, "Content-Type": "application/json" } };
    const res = await axios.post(url, data, config);
    const id = Number(res?.data?._embedded?.leads?.[0]?.id);
    // const id = 1;
    return { id, name };
  }
}
