import { Injectable, UnauthorizedException } from '@nestjs/common'
import { CreateAuthDto } from './dto/create-auth.dto'
import { UpdateAuthDto } from './dto/update-auth.dto'
import { createSurveyDto } from './dto/create-survey.dto'
import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import { UserService } from 'src/user/user.service'
import { User, UserDocument } from '../user/schema/user.schema'
import { Model, ObjectId } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import * as bcrypt from 'bcryptjs'
const school = require('../../jsons/school.json')
const { includesJamo } = require('includes-jamo')
import * as Hangul from 'hangul-js'

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private configService: ConfigService,
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async signUp(createAuthDto: CreateAuthDto): Promise<any> {
    console.log(createAuthDto)
    const salt = await bcrypt.genSalt()
    const hashPw = await bcrypt.hash(String(createAuthDto.password), salt)
    console.log(hashPw)
    createAuthDto.password = hashPw

    const createUser = await new this.userModel(createAuthDto).save()
    return createUser
  }

  async login(userid: string, pw: string): Promise<any> {
    console.log('???')
    let findUser = await this.userModel.findOne({ id: userid })
    //유저 ID체크
    if (findUser == null) {
      throw new UnauthorizedException('User not found.')
    }
    const payload = { sub: findUser._id }
    //비밀번호 체크
    if (findUser && (await bcrypt.compare(String(pw), findUser.password))) {
      console.log('PW OK')
    } else {
      throw new UnauthorizedException('The password is wrong.')
    }
    const accessToken = await this.jwtService.signAsync(payload)
    console.log('act', accessToken)
    const result = await this.userModel.findOneAndUpdate({ id: userid }, { token: accessToken }, { new: true }).lean()
    console.log('upd', result)
    //update token
    return {
      result,
    }
  }

  getUnvList() {
    return school
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`
  }

  remove(id: number) {
    return `This action removes a #${id} auth`
  }

  async regSurvey(req: any, createSurveyDto: createSurveyDto) {
    console.log('svs ID', req)
    const updSurvey = await this.userModel
      .findOneAndUpdate({ _id: req }, { survey: createSurveyDto }, { new: true })
      .lean()
    return updSurvey
  }
}
