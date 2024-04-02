import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import mongoose from 'mongoose';
export class CreateMeetingDto {

 
//    @IsString()
//     founder: mongoose.Schema.Types.ObjectId;
    @IsString()
    title: string;
    @IsString()
    body: string;
    @IsString()
    region: string;
    @IsString()
    localtion: string;
    @IsString()
    time: string;
    @IsNumber()
    maxMember: Number;
    // @IsBoolean()
    // matching: Boolean;
    @IsNumber()
    deposit: Number;

}
