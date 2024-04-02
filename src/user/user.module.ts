import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { UserController } from './user.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { User, UserSchema } from './schema/user.schema'
import { Group, GroupSchema } from './schema/group.schema'
import { JwtModule, JwtService } from '@nestjs/jwt'
import { JwtStrategy } from 'src/auth/auth.strategy'
@Module({
  controllers: [UserController],
  providers: [UserService, JwtStrategy, JwtModule],
  imports: [
    UserModule,
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: Group.name, schema: GroupSchema }]),
  ],
  exports: [MongooseModule, UserService],
})
export class UserModule {}
