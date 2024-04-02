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
const s3User = {
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
  },
  region: process.env.AWS_REGION,
}
// const client = new FooClient({
//   region: process.env.AWS_REGION,
//   credentials: fromCognitoIdentityPool({
//     accessKeyId: process.env.AWS_ACCESS_KEY,
//     secretAccessKey: process.env.AWS_SECRET_KEY,
//   }),
// })
@Injectable()
export class MulterService {
  private readonly s3
  constructor() {
    // AWS.config.update({
    //   region: process.env.AWS_REGION,
    //   credentials: {
    //     accessKeyId: process.env.AWS_ACCESS_KEY,
    //     secretAccessKey: process.env.AWS_SECRET_KEY,
    //   },
    // })
    // this.s3 = new AWS.S3()
  }
  async uploadImage(file: Express.Multer.File) {
    let a = 0
    console.log('??????????', a)
    const key = `${Date.now() + file.originalname}`
    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: 'asdf/' + key,
      Body: file.buffer,
      // credentials: {
      //   accessKeyId: process.env.AWS_ACCESS_KEY,
      //   secretAccessKey: process.env.AWS_SECRET_KEY,
      // },
      // region: process.env.AWS_REGION,
    }
    // let asdf = await client.config.credentials()
    const awsJob = new PutObjectCommand(params)

    const sendImg = await client.send(awsJob)
    // console.log('d.dldldldl3', awsJob)
    a++
    return sendImg
    // return new Promise((resolve, reject) => {
    //   this.s3.putObject(params, (err, data) => {
    //     if (err) reject(err)
    //     resolve(key)
    //   })
    // })
  }
  async updImage(file: Express.Multer.File) {
    try {
      // const key = `${Date.now() + file.originalname}`
      console.log(file)
      const parallelUploads3 = new Upload({
        client: new S3(s3User) || new S3Client(s3User),
        params: {
          ACL: 'public-read', // access control list
          Bucket: process.env.AWS_BUCKET_NAME,
          Key: file.originalname,
          Body: file.buffer,
          // 등등 ...
        },
      })

      parallelUploads3.on('httpUploadProgress', (progress) => {
        console.log('posdpodsfjpiofdsjpio', progress)
      })

      const res = await parallelUploads3.done()
      console.log(res.Location) // 요기 Location 객체가 들어있다
    } catch (err) {
      console.error(err)
    }
  }
}
