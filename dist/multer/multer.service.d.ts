/// <reference types="multer" />
export declare class MulterService {
    constructor();
    uploadImage(file: Express.Multer.File, folder: any): Promise<string>;
}
