import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { Document } from 'mongoose'
export type GroupDocument = Group & Document
// @Schema()
@Schema({ timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } })
export class Group {
  @Prop()
  leader: mongoose.Schema.Types.ObjectId
  @Prop()
  groupName: string
  @Prop()
  phList: [string]
  @Prop()
  gender: string
  @Prop()
  maxMember: Number
  @Prop({ default: 1 })
  currMember: Number
  @Prop()
  members: [string]
  @Prop({ default: false })
  staus: boolean

  @Prop({ default: new Date(), type: mongoose.Schema.Types.Date })
  createdAt: Date

  @Prop({ default: new Date(), type: mongoose.Schema.Types.Date })
  updatedAt: Date
}

export const GroupSchema = SchemaFactory.createForClass(Group)
