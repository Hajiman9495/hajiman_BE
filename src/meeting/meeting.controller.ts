import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
  NotFoundException,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common'
import { FileInterceptor, FilesInterceptor, FileFieldsInterceptor } from '@nestjs/platform-express'
import { MeetingService } from './meeting.service'
import { CreateMeetingDto } from './dto/create-meeting.dto'
import { UpdateMeetingDto } from './dto/update-meeting.dto'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { Meeting, MeetingDocument } from './schema/meeting.schema'
import { Request } from 'express'
import mongoose, { Model, ObjectId } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
@Controller('meeting')
export class MeetingController {
  constructor(
    private readonly meetingService: MeetingService,
    @InjectModel(Meeting.name)
    private meetingModel: Model<MeetingDocument>
  ) {}

  @Post('/regMeeting')
  @UseGuards(JwtAuthGuard)
  create(@Req() req: Request, @Body() createMeetingDto: CreateMeetingDto) {
    console.log('regMeeting Call')
    return this.meetingService.regMeeting(req.user, createMeetingDto)
  }

  @Post('/reqParticipation')
  async reqParticipation(@Body('meetingId') meetingId: ObjectId, @Body('groupId') groupId: ObjectId) {
    // async reqJoin(@Body() body): Promise<any> {d

    return this.meetingService.reqParticipation(meetingId, groupId)
  }

  @Get('/selMeeting')
  selMeeting(@Body('meetingId') meetingId: ObjectId) {
    return this.meetingService.selMeeting(meetingId)
  }

  @Get('/selMeetingList')
  selMeetingList(@Body('limit') limit: number, @Body('page') page: number) {
    return this.meetingService.selMeetingList(limit, page)
  }
  @Get('/meetingListForHome')
  meetingListForHome() {
    return this.meetingService.meetingListForHome()
  }
  @Get('/selReqList')
  remove(@Body('limit') limit: number, @Body('page') page: number, @Body('meetId') meetId: ObjectId) {
    return this.meetingService.selReqList(limit, page, meetId)
  }
  @Post('/imgTest')
  @UseInterceptors(FilesInterceptor('files', 5))
  imgTest(@Body('limit') limit: number, @UploadedFiles() files) {
    console.log('files info', files)
    return this.meetingService.other(limit, files)
  }
}
