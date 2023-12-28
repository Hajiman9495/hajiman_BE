import { AppService } from './app.service';
import { UserDto } from './app.baseDTO';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    postFunc(body: UserDto): any;
}
