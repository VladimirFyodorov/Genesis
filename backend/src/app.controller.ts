import { Controller, Get, Post, Req, Body } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';
import { EntityDTO } from './dto';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get('auth')
  async auth(@Req() req: Request ): Promise<Object> {
    const res = await this.appService.auth(req);
    return res;
  }

  @Post('lead')
  async postLead(@Req() req: Request, @Body() body: EntityDTO): Promise<Object> {
    const res = await this.appService.postLead(req, body);
    return res;
  }

  @Post('contact')
  async postContact(@Req() req: Request, @Body() body: EntityDTO): Promise<Object> {
    const res = await this.appService.postContact(req, body);
    return res;
  }

  @Post('company')
  async postCompany(@Req() req: Request, @Body() body: EntityDTO): Promise<Object> {
    const res = await this.appService.postCompany(req, body);
    return res;
  }
}
