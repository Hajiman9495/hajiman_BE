import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {User,UserSchema} from './schema/user.schema'
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtStrategy } from 'src/auth/auth.strategy';
@Module({
  controllers: [UserController],
  providers: [UserService,JwtStrategy,JwtModule],
  imports: [UserModule,
  MongooseModule.forFeature([{name: User.name,schema: UserSchema}])
  ],
  exports:[MongooseModule,UserService]
})
export class UserModule {}
