import { MulterService } from './multer.service';
export declare class MulterController {
    private readonly multerService;
    commandBus: any;
    constructor(multerService: MulterService);
    uploadS3(files: any, folder: string): Promise<{
        statusCode: number;
        message: string;
        data: string[];
    }>;
    selMeeting(files: any): Promise<void>;
}
