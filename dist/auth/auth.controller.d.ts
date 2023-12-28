import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { checkAuthDto } from './dto/check-auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signUp(createAuthDto: CreateAuthDto): Promise<any>;
    login(checkauthDto: checkAuthDto): Promise<any>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateAuthDto: UpdateAuthDto): string;
    remove(id: string): string;
}
