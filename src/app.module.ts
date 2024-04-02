import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { UserModule } from './user/user.module'
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { MeetingModule } from './meeting/meeting.module'
import { MulterModule } from './multer/multer.module'
import { MulterService } from './multer/multer.service'
//MongooseModule.forRoot()
@Module({
  imports: [
    AuthModule,
    UserModule,
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URL'),
      }),
      inject: [ConfigService],
    }),
    MeetingModule,
    MulterModule,
  ],
  controllers: [AppController],
  providers: [AppService, MulterService],
})
export class AppModule {}
