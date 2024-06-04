import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'
import mongoose from 'mongoose'

export class CreateSelfDto {
  @IsString()
  body: string
  @IsString()
  group: mongoose.Schema.Types.ObjectId
}
