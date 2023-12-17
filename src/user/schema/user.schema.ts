import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
export type UserDocument = User & Document;
@Schema()
// @Schema({ timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } })

export class User{
    // @Prop({ default: new Date(), type: mongoose.Schema.Types.Date })
    // createdAt: Date;

    // @Prop({ default: new Date(), type: mongoose.Schema.Types.Date })
    // updatedAt: Date;

    @Prop()
    id: string;

    @Prop()
    password: string;

    @Prop({ required: false })
    nickName: string;
    
  
}

export const UserSchema = SchemaFactory.createForClass(User);