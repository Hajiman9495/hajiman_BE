import { Injectable } from '@nestjs/common'
import { ListBucketsCommand, S3Client, PutObjectCommand, S3 } from '@aws-sdk/client-s3'
import { Upload } from '@aws-sdk/lib-storage'
import { fromCognitoIdentityPool } from '@aws-sdk/credential-providers' // ES6 import
import * as dotenv from 'dotenv'
dotenv.config()

const client = new S3Client({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
  },
  region: process.env.AWS_REGION,
})
// const s3User = {
//   credentials: {
//     accessKeyId: process.env.AWS_ACCESS_KEY,
//     secretAccessKey: process.env.AWS_SECRET_KEY,
//   },
//   region: process.env.AWS_REGION,
// }
@Injectable()
export class MulterService {
  constructor() {}
  async uploadImage(file: Express.Multer.File, folder) {
    let a = 0
    const key = `${Date.now() + file.originalname}`
    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: folder + '/' + key,
      Body: file.buffer,
    }

    const awsJob = new PutObjectCommand(params)

    const sendImg = await client.send(awsJob)
    return 'https://lmm-bucket.s3.ap-northeast-2.amazonaws.com/' + params.Key
  }
  //   async updImage(file: Express.Multer.File) {
  //     try {
  //       // const key = `${Date.now() + file.originalname}`
  //       console.log(file)
  //       const parallelUploads3 = new Upload({
  //         client: new S3(s3User) || new S3Client(s3User),
  //         params: {
  //           ACL: 'public-read', // access control list
  //           Bucket: process.env.AWS_BUCKET_NAME,
  //           Key: file.originalname,
  //           Body: file.buffer,
  //           // 등등 ...
  //         },
  //       })

  //       parallelUploads3.on('httpUploadProgress', (progress) => {
  //         console.log('posdpodsfjpiofdsjpio', progress)
  //       })

  //       const res = await parallelUploads3.done()
  //       console.log(res.Location) // 요기 Location 객체가 들어있다
  //     } catch (err) {
  //       console.error(err)
  //     }
  //   }
}
