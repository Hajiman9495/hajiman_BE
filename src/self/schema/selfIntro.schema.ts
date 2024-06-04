import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { Document } from 'mongoose'
import * as mongoosePaginate from 'mongoose-paginate-v2'

export type selfIntroDocument = selfIntro & Document
// @Schema()
@Schema({ timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } })
export class selfIntro {
  @Prop()
  nick: string
  @Prop()
  body: string
  @Prop({ default: 0 })
  like: number
  @Prop({ default: false })
  delete: boolean
  @Prop({ default: 'https://lmm-bucket.s3.ap-northeast-2.amazonaws.com/TSRT/blank-profile-picture-973460_1920.png' })
  profileImg: string
  @Prop({ default: new Date(), type: mongoose.Schema.Types.Date })
  createdAt: Date

  @Prop({ default: new Date(), type: mongoose.Schema.Types.Date })
  updatedAt: Date
}

// export const requestListSchema = SchemaFactory.createForClass(requestList)

const schema = SchemaFactory.createForClass(selfIntro)
schema.plugin(mongoosePaginate)
export const selfIntroSchema = schema
