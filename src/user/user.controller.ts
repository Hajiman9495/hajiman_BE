import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards, Req } from '@nestjs/common'
import { UserService } from './user.service'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { CreateGroupDto } from './dto/create-group.dto'
import { User } from './schema/user.schema'
import { AuthGuard } from '@nestjs/passport'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'
import { ObjectId } from 'mongoose'
import { Request } from 'express'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/regGroup')
  @UseGuards(JwtAuthGuard)
  async regGroup(@Req() req: Request, @Body() creategroupDto: CreateGroupDto) {
    console.log('creategroupDto', creategroupDto)
    return this.userService.regGroup(req.user, creategroupDto)
  }

  @Get('/selGroup')
  @UseGuards(JwtAuthGuard)
  selGroup(@Req() req: Request, @Body('groupId') groupId: ObjectId) {
    console.log('groupId', groupId, req.user)
    return this.userService.selGroup(req.user, groupId)
  }

  @Post('/joinGroup')
  @UseGuards(JwtAuthGuard)
  joinGroup(@Req() req: Request, @Body('groupId') groupId: ObjectId) {
    return this.userService.joinGroup(req.user, groupId)
  }

  @Patch(':id')
  update(@Param('id token') id: string, token: string) {
    return this.userService.update(id, token)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id)
  }
}
