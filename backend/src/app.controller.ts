import { Controller, Get, Post, HttpCode, Req, Body } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';
import { EntityDTO } from './dto';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('lead')
  @HttpCode(200)
  async postLead(@Req() req: Request, @Body() body: EntityDTO): Promise<Object> {
    const res = await this.appService.postLead(req, body);
    return res;
  }

  @Post('contact')
  @HttpCode(200)
  async postContact(@Req() req: Request, @Body() body: EntityDTO): Promise<Object> {
    const res = await this.appService.postContact(req, body);
    return res;
  }

  @Post('company')
  @HttpCode(200)
  async postCompany(@Req() req: Request, @Body() body: EntityDTO): Promise<Object> {
    const res = await this.appService.postCompany(req, body);
    return res;
  }
}
