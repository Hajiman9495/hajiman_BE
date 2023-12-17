import { Injectable } from '@nestjs/common';
import { UserDto } from './app.baseDTO';
@Injectable()
export class AppService {
  getHello(): string {
    console.log("???2?")
    return 'Hello World@@@!';
  }

  postFunc(body:UserDto){
    const {text,num} = body
    console.log("post입니다.",text)
    console.log("post입니다.",num)
    
    return Object.assign({text,num})
  }

}
