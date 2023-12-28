import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schema/user.schema';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
@Controller('user')

export class UserController {
 
  constructor(private readonly userService: UserService) {}

  @Post("/create")
 async create(@Body() createUserDto: CreateUserDto) {
    console.log("dsdsd");
    return this.userService.create(createUserDto);
  }

  @Post('/fa')
  @UseGuards(JwtAuthGuard)
  findAll() {
    console.log("??DD?D?D?D?")
    return this.userService.findAll();
  }

  @Get('/findId')
 
  findOne(@Query('id') id: string) {
    console.log("id",id)
    return this.userService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id token') id: string,token:string) {
    return this.userService.update(id,token);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
