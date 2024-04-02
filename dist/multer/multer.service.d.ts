/// <reference types="multer" />
export declare class MulterService {
    private readonly s3;
    constructor();
    uploadImage(file: Express.Multer.File): Promise<import("@aws-sdk/client-s3").PutObjectCommandOutput>;
    updImage(file: Express.Multer.File): Promise<void>;
}
