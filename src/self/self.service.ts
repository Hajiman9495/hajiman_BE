import { Injectable } from '@nestjs/common'
import { CreateSelfDto } from './dto/create-self.dto'
import { UpdateSelfDto } from './dto/update-self.dto'
import { User, UserDocument } from '../user/schema/user.schema'
import { selfIntro, selfIntroDocument } from './schema/selfIntro.schema'
import mongoose, { Model, ObjectId, PaginateModel } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'

@Injectable()
export class SelfService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(selfIntro.name) private selfModel: PaginateModel<selfIntroDocument>
  ) {}
  async regSelfIntro(body: string, accoutId) {
    console.log('>>>>>>', body)
    const findUser = await this.userModel.findOne({ _id: accoutId }).select('nickName').lean()
    const save = new this.selfModel({
      nick: findUser.nickName,
      body: body,
    })
    console.log(save)
    const saveSelf = await new this.selfModel(save).save()
    return saveSelf
  }

  async selfInfoList(limit: number, page: number) {
    const list = await this.selfModel.paginate({ delete: false }, { sort: { createdAt: -1 }, limit: limit, page: page })
    return list
  }

  async selfDetail(id: number) {
    return `This action returns a #${id} self`
  }

  update(id: number, updateSelfDto: UpdateSelfDto) {
    return `This action updates a #${id} self`
  }

  remove(id: number) {
    return `This action removes a #${id} self`
  }
}
