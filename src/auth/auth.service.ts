import { Injectable,UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { ConfigService } from "@nestjs/config";
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import {User,UserDocument} from '../user/schema/user.schema'
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcryptjs';
@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
              private configService: ConfigService,
              private userService : UserService,
              private jwtService:JwtService,
              ) {}


  async signUp(createAuthDto: CreateAuthDto):Promise<any> {
    console.log(createAuthDto)
    const salt = await bcrypt.genSalt();
    const hashPw = await bcrypt.hash(String(createAuthDto.password),salt)
    console.log(hashPw)
    createAuthDto.password = hashPw
    const createUser = await new this.userModel(createAuthDto).save()
    return createUser;
  }

  async login(userid: string,pw:string):Promise<any> {
   
    console.log("???")
    let findUser = await this.userModel.findOne({id:userid})
    //유저 ID체크
    if(findUser == null)
    {

      throw new UnauthorizedException("User not found.")
    }
    const payload = { sub: findUser._id };
    //비밀번호 체크
    if(findUser && await bcrypt.compare(String(pw),findUser.password))
    {
      console.log("PW OK")
    }
    else{
      throw new UnauthorizedException("The password is wrong.")
    }
    const accessToken = await this.jwtService.signAsync(payload)
    console.log("act",accessToken)
    const result =  await this.userModel.findOneAndUpdate({id:userid},{token:accessToken},{new:true}).lean()
    console.log("upd",result)
    //update token
    return {
      result
    };
  }

  findAll() {
    console.log("가드통과함")
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
