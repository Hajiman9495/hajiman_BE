import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';


export class CreateAuthDto 
{
    @IsNotEmpty()
    @IsString()
    id:string;

    @IsNotEmpty()
    @IsNumber()
    password:string;

    @IsNotEmpty()
    @IsString()
    userName:string;

    @IsNotEmpty()
    @IsString()
    birth:string;

    @IsNotEmpty()
    @IsString()
    nickName:string;


}
