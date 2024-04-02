import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'

export class CreateGroupDto {
  @IsNotEmpty()
  @IsString()
  groupName: String
  @IsNotEmpty()
  @IsArray()
  phList: [string]
  @IsString()
  gender: string
  @IsNotEmpty()
  @IsNumber()
  maxMamber: Number
  members: [string]
}
