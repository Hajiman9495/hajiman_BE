import { Injectable } from '@nestjs/common'
import { CreateMeetingDto } from './dto/create-meeting.dto'
import { UpdateMeetingDto } from './dto/update-meeting.dto'
import { InjectModel } from '@nestjs/mongoose'
import mongoose, { Model, ObjectId, PaginateModel } from 'mongoose'
import { Meeting, MeetingDocument } from './schema/meeting.schema'
import { User, UserDocument } from '../user/schema/user.schema'
import { requestList, requestListDocument } from './schema/requestList.schema'
import { MulterService } from 'src/multer/multer.service'
import * as moment from 'moment'
import * as qrcode from 'qrcode'
@Injectable()
export class MeetingService {
  constructor(
    // private readonly upImg: MulterService,
    @InjectModel(Meeting.name) private meetingModel: PaginateModel<MeetingDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(requestList.name) private reqListModel: PaginateModel<requestListDocument>
  ) {}

  async regMeeting(req, createMeetingDto: CreateMeetingDto) {
    console.log('->>>', req)
    const regQr = await qrcode.toDataURL(req)
    console.log('->>>', createMeetingDto)
    const findUser = await this.userModel.findOne({ _id: req }).select('gender').lean()

    let saveMeet = new this.meetingModel({
      founder: req,
      title: createMeetingDto.title,
      body: createMeetingDto.body,
      region: createMeetingDto.region,
      localtion: createMeetingDto.localtion,
      time: createMeetingDto.time,
      maxMember: createMeetingDto.maxMember,
      deposit: createMeetingDto.deposit,
      qrCode: regQr,
    })
    findUser.gender == 'man' ? (saveMeet.maleGroup = true) : (saveMeet.femaleGroup = true)
    const createMeet = await new this.meetingModel(saveMeet).save()
    console.log(createMeet)
    return createMeet
  }

  async reqParticipation(meetingInfo: ObjectId, groupId: ObjectId) {
    let now = moment()
    const newList = new this.reqListModel({
      meetId: meetingInfo,
      groupId: groupId,
      requestTime: moment(),
      deadline: now.add(1, 'days'),
    })
    const regDoc = await new this.reqListModel(newList).save()
    return regDoc
  }

  async selMeeting(meetingId: ObjectId) {
    console.log(meetingId)
    const meetingInfo = await this.meetingModel.findById({ _id: meetingId }).lean()
    return meetingInfo
  }

  async selMeetingList(limit: number, page: number) {
    const meetingInfo = await this.meetingModel.paginate(
      { matching: false },
      { sort: { createdAt: -1 }, limit: limit, page: page }
    )
    return meetingInfo
  }

  async selReqList(limit: number, page: number, meetId: ObjectId) {
    const reqInfoList = await this.reqListModel.paginate(
      { meetId: meetId },
      { sort: { createdAt: -1 }, limit: limit, page: page }
    )
    return reqInfoList
  }

  async other(limit: number, file: Express.Multer.File) {
    // const ohFnc =  this.upImg.uploadImage()
    console.log(limit)
    console.log(file)

    return 'd'
  }
}
