"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MulterService = void 0;
const common_1 = require("@nestjs/common");
const client_s3_1 = require("@aws-sdk/client-s3");
const lib_storage_1 = require("@aws-sdk/lib-storage");
const dotenv = require("dotenv");
dotenv.config();
const client = new client_s3_1.S3Client({
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_KEY,
    },
    region: process.env.AWS_REGION,
});
const s3User = {
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_KEY,
    },
    region: process.env.AWS_REGION,
};
let MulterService = class MulterService {
    constructor() {
    }
    async uploadImage(file) {
        let a = 0;
        console.log('??????????', a);
        const key = `${Date.now() + file.originalname}`;
        const params = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: 'asdf/' + key,
            Body: file.buffer,
        };
        const awsJob = new client_s3_1.PutObjectCommand(params);
        const sendImg = await client.send(awsJob);
        a++;
        return sendImg;
    }
    async updImage(file) {
        try {
            console.log(file);
            const parallelUploads3 = new lib_storage_1.Upload({
                client: new client_s3_1.S3(s3User) || new client_s3_1.S3Client(s3User),
                params: {
                    ACL: 'public-read',
                    Bucket: process.env.AWS_BUCKET_NAME,
                    Key: file.originalname,
                    Body: file.buffer,
                },
            });
            parallelUploads3.on('httpUploadProgress', (progress) => {
                console.log('posdpodsfjpiofdsjpio', progress);
            });
            const res = await parallelUploads3.done();
            console.log(res.Location);
        }
        catch (err) {
            console.error(err);
        }
    }
};
exports.MulterService = MulterService;
exports.MulterService = MulterService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], MulterService);
//# sourceMappingURL=multer.service.js.map