import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common'
import { AuthService } from './auth.service'
import { CreateAuthDto } from './dto/create-auth.dto'
import { UpdateAuthDto } from './dto/update-auth.dto'
import { checkAuthDto } from './dto/check-auth.dto'
import { createSurveyDto } from './dto/create-survey.dto'
import { UserSchema } from 'src/user/schema/user.schema'
import { JwtAuthGuard } from './jwt-auth.guard'
import { Request } from 'express'
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signUp')
  signUp(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.signUp(createAuthDto)
  }

  @Post('/login')
  login(@Body() checkauthDto: checkAuthDto) {
    console.log('input data =>', checkauthDto)
    return this.authService.login(checkauthDto.id, checkauthDto.password)
  }
  @UseGuards(JwtAuthGuard)
  @Get('/findall')
  findAll(@Req() req: Request, @Body() test: string) {
    console.log('?', test)
    console.log('req', req.user)
    return 'dd'
  }
  @UseGuards(JwtAuthGuard)
  @Post('/regSurvey')
  regSurvey(@Req() req: Request, @Body() surveyDto: createSurveyDto) {
    console.log('>>>>', req.user)
    return this.authService.regSurvey(req.user, surveyDto)
  }

  @Get('/getUnvList')
  getUnivList() {
    return this.authService.getUnvList()
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id)
  }
}
