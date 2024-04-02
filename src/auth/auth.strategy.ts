import { Injectable, UnauthorizedException } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Strategy, ExtractJwt } from 'passport-jwt'
import { UserService } from '../user/user.service'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { User, UserDocument } from '../user/schema/user.schema'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private userService: UserService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'hajiman', // Replace with your own secret key
    })
  }

  async validate(payload: any) {
    console.log(payload, '<<<<?')
    const user = await this.userModel.findOne({ _id: payload.sub })
    const retrunvalue = user._id
    console.log(retrunvalue)
    console.log('Validate print-------')
    if (!user) {
      console.log('/????')
      throw new UnauthorizedException()
    }
    return retrunvalue
  }
}
