import { Module } from '@nestjs/common'
import { MeetingService } from './meeting.service'
import { MeetingController } from './meeting.controller'
import { Meeting, MeetingSchema } from './schema/meeting.schema'
import { requestList, requestListSchema } from './schema/requestList.schema'
import { MongooseModule } from '@nestjs/mongoose'
import { User, UserSchema } from 'src/user/schema/user.schema'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Meeting.name, schema: MeetingSchema },
      { name: User.name, schema: UserSchema },
      { name: requestList.name, schema: requestListSchema },
    ]),
    // MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    // MongooseModule.forFeature([{ name: 'request', schema: requestListSchema }]),
  ],
  controllers: [MeetingController],
  providers: [MeetingService],
})
export class MeetingModule {}
