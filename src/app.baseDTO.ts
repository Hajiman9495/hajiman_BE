import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UserDto
{
    @IsNotEmpty()
    @IsString()
    text:String;

    @IsNotEmpty()
    @IsNumber()
    num:number;
}