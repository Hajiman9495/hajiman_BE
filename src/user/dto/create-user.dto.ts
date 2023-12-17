import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {

    @IsNotEmpty()
    @IsString()
    id:String;

    @IsNotEmpty()
    @IsString()
    password:string;
    @IsNotEmpty()
    @IsString()
    nickName:string

}
