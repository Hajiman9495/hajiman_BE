import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { Document } from 'mongoose'
import * as mongoosePaginate from 'mongoose-paginate-v2'

export type requestListDocument = requestList & Document
// @Schema()
@Schema({ timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } })
export class requestList {
  @Prop({ required: true }) //방장
  meetId: mongoose.Schema.Types.ObjectId
  @Prop({ required: true }) //생성한그룹아이디
  groupId: mongoose.Schema.Types.ObjectId

  @Prop({ required: false }) //모임이름
  requestTime: Date

  @Prop({ required: false }) //간단 설명
  deadline: Date

  @Prop({ default: false }) //지역
  select: Boolean

  @Prop({ default: false }) //경위도
  cancel: Boolean
  @Prop({ default: new Date(), type: mongoose.Schema.Types.Date })
  createdAt: Date

  @Prop({ default: new Date(), type: mongoose.Schema.Types.Date })
  updatedAt: Date
}

// export const requestListSchema = SchemaFactory.createForClass(requestList)

const schema = SchemaFactory.createForClass(requestList)
schema.plugin(mongoosePaginate)
export const requestListSchema = schema
