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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const user_service_1 = require("../user/user.service");
const user_schema_1 = require("../user/schema/user.schema");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const bcrypt = require("bcryptjs");
let AuthService = class AuthService {
    constructor(userModel, configService, userService, jwtService) {
        this.userModel = userModel;
        this.configService = configService;
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async signUp(createAuthDto) {
        console.log(createAuthDto);
        const salt = await bcrypt.genSalt();
        const hashPw = await bcrypt.hash(String(createAuthDto.password), salt);
        console.log(hashPw);
        createAuthDto.password = hashPw;
        const createUser = await new this.userModel(createAuthDto).save();
        return createUser;
    }
    async login(userid, pw) {
        console.log("???");
        let findUser = await this.userModel.findOne({ id: userid });
        if (findUser == null) {
            throw new common_1.UnauthorizedException("User not found.");
        }
        const payload = { sub: findUser._id };
        if (findUser && await bcrypt.compare(String(pw), findUser.password)) {
            console.log("PW OK");
        }
        else {
            throw new common_1.UnauthorizedException("The password is wrong.");
        }
        const accessToken = await this.jwtService.signAsync(payload);
        console.log("act", accessToken);
        const result = await this.userModel.findOneAndUpdate({ id: userid }, { token: accessToken }, { new: true }).lean();
        console.log("upd", result);
        return {
            result
        };
    }
    findAll() {
        console.log("가드통과함");
        return `This action returns all auth`;
    }
    findOne(id) {
        return `This action returns a #${id} auth`;
    }
    update(id, updateAuthDto) {
        return `This action updates a #${id} auth`;
    }
    remove(id) {
        return `This action removes a #${id} auth`;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        config_1.ConfigService,
        user_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map