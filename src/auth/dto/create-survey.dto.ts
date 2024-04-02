import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'
export class createSurveyDto {
  @IsNotEmpty()
  survey: {
    stature: string //키

    holidays: string //휴일에 나는

    drink: string // 주량

    smoke: string //흡연

    hobby: string //취미

    food: string //
    interests: [string]

    whatif: string

    animal: string

    style: string

    music: string

    contact: string

    hangoverFood: string

    loveAction: string

    longDistance: string
  }
}
