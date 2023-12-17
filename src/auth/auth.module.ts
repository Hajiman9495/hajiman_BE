import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import {User,UserSchema} from '../user/schema/user.schema'
import {UserModule} from '../user/user.module'
import { UserService } from 'src/user/user.service';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './auth.strategy';
@Module({
  imports:[ConfigModule,
    PassportModule,
    JwtModule.register({
      secret:"hajiman",
      signOptions:{expiresIn:'5h'}
    }),
    UserModule
  ],
  controllers: [AuthController],
  providers: [AuthService,JwtModule,JwtStrategy],
  exports:[JwtModule,JwtStrategy]
})
export class AuthModule {}
