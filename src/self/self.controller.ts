import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common'
import { SelfService } from './self.service'
import { CreateSelfDto } from './dto/create-self.dto'
import { UpdateSelfDto } from './dto/update-self.dto'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'
import { Request } from 'express'

@Controller('self')
export class SelfController {
  constructor(private readonly selfService: SelfService) {}

  @Post('/regSelfIntro')
  @UseGuards(JwtAuthGuard)
  create(@Req() req: Request, @Body('body') body: string) {
    return this.selfService.regSelfIntro(body, req.user)
  }

  @Post('/selfInfoList')
  findAll(@Body('page') page: number, @Body('limit') limit: number) {
    return this.selfService.selfInfoList(limit, page)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.selfService.selfDetail(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSelfDto: UpdateSelfDto) {
    return this.selfService.update(+id, updateSelfDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.selfService.remove(+id)
  }
}
