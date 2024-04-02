import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { Document } from 'mongoose'
import * as mongoosePaginate from 'mongoose-paginate-v2'

export type MeetingDocument = Meeting & Document
// @Schema()
@Schema({ timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } })
export class Meeting {
  @Prop({ default: new Date(), type: mongoose.Schema.Types.Date })
  createdAt: Date

  @Prop({ default: new Date(), type: mongoose.Schema.Types.Date })
  updatedAt: Date

  @Prop({ required: true }) //방장
  founderId: mongoose.Schema.Types.ObjectId
  @Prop({ required: true }) //생성한그룹아이디
  mintGroupId: mongoose.Schema.Types.ObjectId

  @Prop({ required: true }) //모임이름
  title: string

  @Prop({ required: false }) //간단 설명
  body: string

  @Prop({ required: true }) //지역
  region: string

  @Prop({ required: true }) //경위도
  coordinates: string

  @Prop({ required: true }) //모임 날
  time: mongoose.Schema.Types.Date

  @Prop({ required: true }) //각성별 최대인원 3:3 이면 해당값은 3
  maxMember: number

  @Prop({ required: false, default: false }) //매칭여부
  matching: boolean

  @Prop({ required: true }) //보증금
  deposit: number

  @Prop({ default: false }) //보증금
  maleGroup: boolean

  @Prop({ default: false }) //보증금
  femaleGroup: boolean
  @Prop()
  gender: string
  @Prop()
  qrCode: string
  @Prop() //방장
  matchGroupId: mongoose.Schema.Types.ObjectId
}

const schema = SchemaFactory.createForClass(Meeting)
schema.plugin(mongoosePaginate)
export const MeetingSchema = schema
// export const MeetingSchema = SchemaFactory.createForClass(Meeting)
// // schema.plugin(mongoosePaginate)
// // export const MeetingSchema = schema
