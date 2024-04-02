import { HttpException, Injectable, UnauthorizedException } from '@nestjs/common'
import { CreateGroupDto } from './dto/create-group.dto'
import { Model, ObjectId } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { User, UserDocument } from './schema/user.schema'
import { Group, GroupDocument } from './schema/group.schema'
@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Group.name) private groupModel: Model<GroupDocument>
  ) {}
  async regGroup(req: any, creategroupDto: CreateGroupDto): Promise<any> {
    creategroupDto.members = [req]
    const leaderInfo = await this.userModel.findOne({ _id: req }).select('gender').lean()
    creategroupDto.gender = leaderInfo.gender
    const regGroupData = await new this.groupModel(creategroupDto).save()
    return regGroupData
  }

  async selGroup(req: any, groupId: ObjectId) {
    console.log('@Body() ', groupId)
    const findPh = await this.userModel.findOne({ _id: req }).lean()
    const findGroup = await this.groupModel.findOne({ _id: groupId }).lean()
    const phList = findGroup.phList
    if (!phList.includes(findPh.phone)) {
      throw new UnauthorizedException('Permission Error')
    }
    console.log('findGroup', findGroup)
    return findGroup
  }

  async joinGroup(req: any, groupId: ObjectId) {
    let findGroup = await this.groupModel.findOne({ _id: groupId })
    console.log('HERE', findGroup)
    findGroup.members.push(req)
    let calmem = Number(findGroup.currMember) + 1
    if (calmem > Number(findGroup.maxMember)) {
      throw new HttpException('over member error', 404)
    }
    const updGroup = await this.groupModel
      .findOneAndUpdate({ _id: groupId }, { members: findGroup.members, $inc: { currMamber: 1 } }, { new: true })
      .lean()
    return updGroup
  }

  async update(id: string, token: string) {
    const updateUser = await this.userModel.findOneAndUpdate({ id: id }, { token: token }).lean()
    return updateUser
  }

  remove(id: number) {
    return `This action removes a #${id} user`
  }
}
