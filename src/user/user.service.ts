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
    const cuser = await new this.userModel(createUserDto)
    return cuser.save();
  }

  findAll() {
    console.log("GUARD SUCCESS")
    return `This action returns all user`;
  }

  async findOne(id: string) {
    const findId = await this.userModel.findOne({id:id});
    return findId;

  }

  async update(id: string,token:string) {
    const updateUser = await this.userModel.findOneAndUpdate({id:id},{token:token}).lean()
    return updateUser
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
