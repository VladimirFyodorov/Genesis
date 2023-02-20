import { Controller, Get, Post, Query, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('deal')
  getDeal(): Object {
    return { id: 1, name: 'deal'};
  }

  @Get('auth')
  async auth(@Req() req: Request ): Promise<Object> {
    const res = await this.appService.auth(req);
    return res;
  }

  @Post('lead')
  async postLead(@Req() req: Request): Promise<Object> {
    const res = await this.appService.postLead(req);
    return res;
  }
}
