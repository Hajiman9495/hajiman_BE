import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'

export class CreateAuthDto {
  @IsNotEmpty()
  @IsString()
  id: string

  @IsNotEmpty()
  @IsNumber()
  password: string
  @IsNotEmpty()
  @IsString()
  phone: string
  @IsNotEmpty()
  @IsString()
  userName: string
  @IsNotEmpty()
  @IsString()
  birth: string
  @IsNotEmpty()
  @IsString()
  gender: string
  @IsNotEmpty()
  @IsString()
  nickName: string
  @IsNotEmpty()
  @IsBoolean()
  survey: boolean = false
  // @IsNotEmpty()
  // survey: {
  //   stature: string //키

  //   holidays: string //휴일에 나는

  //   drink: string // 주량

  //   smoke: string //흡연

  //   hobby: string //취미

  //   food: string //
  //   interests: [string]

  //   whatif: string

  //   animal: string

  //   style: string

  //   music: string

  //   contact: string

  //   hangoverFood: string

  //   loveAction: string

  //   longDistance: string
  // }
}
