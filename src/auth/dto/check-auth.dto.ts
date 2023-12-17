import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthDto } from './create-auth.dto';

export class checkAuthDto
{
    @IsNotEmpty()
    @IsString()
    id:string;

    @IsNotEmpty()
    @IsNumber()
    password:string;


   
}
