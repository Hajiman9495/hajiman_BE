import { Controller, Post, UploadedFiles, UseInterceptors } from '@nestjs/common'
import { FileInterceptor, FilesInterceptor, FileFieldsInterceptor } from '@nestjs/platform-express'
import { MulterService } from './multer.service'
import { Express } from 'express'
import * as AWS from 'aws-sdk'
import * as multer from 'multer'
type File = Express.Multer.File

@Controller('multer')
export class MulterController {
  commandBus: any
  constructor(private readonly multerService: MulterService) {}
  @Post('upl')
  @UseInterceptors(FilesInterceptor('files', 5))
  async uploadS3(@UploadedFiles() files) {
    console.log('?????????')
    let i = 0
    console.log('files??? ====>', files)
    const imgurl: string[] = []
    await Promise.all(
      files.map(async (file: File) => {
        i++
        const key = await this.multerService.uploadImage(file)
        console.log('path?:', key)
        imgurl.push(String(key))
      })
    )
    console.log('?????????', i)

    return {
      statusCode: 201,
      message: `이미지 등록 성!공`,
      data: imgurl,
    }
  }

  @Post('/test')
  @UseInterceptors(FilesInterceptor('files', 5))
  async selMeeting(@UploadedFiles() files) {
    console.log('?')
    await this.multerService.updImage(files)
    console.log('Test!@')
  }
}
