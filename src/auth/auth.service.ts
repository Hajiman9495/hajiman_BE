import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { ConfigService } from "@nestjs/config";
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import {User} from '../user/schema/user.schema'
@Injectable()
export class AuthService {
  constructor(private configService: ConfigService,
              private userService : UserService,
              private jwtService:JwtService) {}
    async validateUser(createAuthDto: CreateAuthDto) {
    // const getURL = this.configService.get<string>('MONGODB_URL')
    
    //
    let ids = createAuthDto.id.toString()
    const userChk = await this.userService.findOne(ids)
    console.log("FF")
    if(userChk !== null)
    {
      console.log("initJwt Success")
      return userChk
    }
    return null;
  }

  async login(userid: string): Promise<{ accessToken: string }> {
    console.log("?")
    const payload = { sub: userid };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
