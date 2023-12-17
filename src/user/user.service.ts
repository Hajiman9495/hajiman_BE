import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {User,UserDocument} from './schema/user.schema'
@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  async create(createUserDto: CreateUserDto):Promise<CreateUserDto> {
    console.log("?",createUserDto.id)
    const cuser = await new this.userModel(createUserDto)
    return cuser.save();
  }

  findAll() {
    return `This action returns all user`;
  }

  async findOne(id: string) {
    console.log("<<<<<><>",id)
    const findId = await this.userModel.findOne({id:id});
    console.log(findId)
    return findId;

  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
