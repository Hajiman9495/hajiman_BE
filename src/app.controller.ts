import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import {UserDto} from './app.baseDTO'
@Controller('test')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('/postFunc')
  // postFunc(@Body('text')text:string,@Body('num')num:number){
    postFunc(@Body() body:UserDto){

  return this.appService.postFunc(body);
  }
}
