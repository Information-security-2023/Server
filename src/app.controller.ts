import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('employee')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello/:id')
  async getHello(): Promise<any> {
    return await this.appService.getHello();
  }
  @Get(':id')
  async getEmployee(@Param('id') id:string): Promise<any> {
    return await this.appService.getEmployee(id);
  }


}
