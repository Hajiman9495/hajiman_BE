import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { Document } from 'mongoose'
export type UserDocument = User & Document
// @Schema()
@Schema({ timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } })
export class User {
  @Prop({ default: new Date(), type: mongoose.Schema.Types.Date })
  createdAt: Date

  @Prop({ default: new Date(), type: mongoose.Schema.Types.Date })
  updatedAt: Date

  @Prop()
  id: string
  @Prop()
  birth: string
  @Prop()
  gender: string
  @Prop()
  password: string
  @Prop()
  phone: string
  @Prop({ required: false })
  region: string
  @Prop({ required: false })
  nickName: string

  @Prop({ default: 0 })
  point: Number
  @Prop({ type: Object })
  survey: {
    height: string //키
    holidays: string //휴일에 나는
    drink: string // 주량
    smoke: string //흡연
    hobby: string //취미
    food: string //
    interests: [string]
    whatif: string
    animal: string
    style: string
    music: string
    contact: string
    hangoverFood: string
    loveAction: string
    longDistance: string
  }

  @Prop()
  token: string

  @Prop({ default: false })
  unvCertify: Boolean

  @Prop({ default: false })
  companyCertify: Boolean
}

export const UserSchema = SchemaFactory.createForClass(User)
