import { Injectable, Req, Body } from '@nestjs/common';
import { Request } from 'express';
import axios from 'axios';
import { authService, AuthData, Cookies } from './AuthService';
import { CookieService } from './CookieService';
import { EntityDTO, AmocrmDTO, Paths, AmocrmLeadsDTO, AmocrmContactsDTO, AmocrmCompaniesDTO } from './dto';



@Injectable()
export class AppService {
  async auth(@Req() req: Request): Promise<AuthData> {
    const userId = (CookieService.cookieParser(req) as Cookies)['X-Client-Id'];
    const authData = authService.update(userId)
    return authData;
  }

  async post(@Req() req: Request, @Body() body: EntityDTO, path: Paths): Promise<{ amocrmData: AmocrmDTO, name: string}> {
    const userId = (CookieService.cookieParser(req) as Cookies)['X-Client-Id'];
    const authData = await authService.get(userId)
    const url = `https://${authData.base_domain}/api/v4/${path}`;
    const token = authData.access_token;
    const name = body.name;
    const data = { "name": [name] };
    const config =  { headers: { "Authorization": "Bearer " + token, "Content-Type": "application/json" } };
    const amocrmData = (await axios.post(url, data, config)).data;
    return { amocrmData, name };
  }

  async postLead(@Req() req: Request, @Body() body: EntityDTO): Promise<{ id: number, name: string }> {
    const path = 'leads';
    const { amocrmData, name } = await this.post(req, body, path);
    const id = (amocrmData as AmocrmLeadsDTO)._embedded[path][0].id;
    return { id, name }
  }

  async postContact(@Req() req: Request, @Body() body: EntityDTO): Promise<{ id: number, name: string }> {
    const path = 'contacts';
    const { amocrmData, name } = await this.post(req, body, path);
    const id = (amocrmData as AmocrmContactsDTO)._embedded[path][0].id;
    return { id, name }
  }

  async postCompany(@Req() req: Request, @Body() body: EntityDTO): Promise<{ id: number, name: string }> {
    const path = 'companies';
    const { amocrmData, name } = await this.post(req, body, path);
    const id = (amocrmData as AmocrmCompaniesDTO)._embedded[path][0].id;
    return { id, name }
  }
}
