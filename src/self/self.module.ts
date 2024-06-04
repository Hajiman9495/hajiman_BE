import { Module } from '@nestjs/common'
import { SelfService } from './self.service'
import { SelfController } from './self.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { User, UserSchema } from 'src/user/schema/user.schema'
import { selfIntro, selfIntroSchema } from './schema/selfIntro.schema'
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: selfIntro.name, schema: selfIntroSchema },
    ]),
  ],
  controllers: [SelfController],
  providers: [SelfService],
})
export class SelfModule {}
