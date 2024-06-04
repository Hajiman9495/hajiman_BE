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
exports.SelfService = void 0;
const common_1 = require("@nestjs/common");
const user_schema_1 = require("../user/schema/user.schema");
const selfIntro_schema_1 = require("./schema/selfIntro.schema");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let SelfService = class SelfService {
    constructor(userModel, selfModel) {
        this.userModel = userModel;
        this.selfModel = selfModel;
    }
    async regSelfIntro(body, accoutId) {
        console.log('>>>>>>', body);
        const findUser = await this.userModel.findOne({ _id: accoutId }).select('nickName').lean();
        const save = new this.selfModel({
            nick: findUser.nickName,
            body: body,
        });
        console.log(save);
        const saveSelf = await new this.selfModel(save).save();
        return saveSelf;
    }
    async selfInfoList(limit, page) {
        const list = await this.selfModel.paginate({ delete: false }, { sort: { createdAt: -1 }, limit: limit, page: page });
        return list;
    }
    async selfDetail(id) {
        return `This action returns a #${id} self`;
    }
    update(id, updateSelfDto) {
        return `This action updates a #${id} self`;
    }
    remove(id) {
        return `This action removes a #${id} self`;
    }
};
exports.SelfService = SelfService;
exports.SelfService = SelfService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(user_schema_1.User.name)),
    __param(1, (0, mongoose_2.InjectModel)(selfIntro_schema_1.selfIntro.name)),
    __metadata("design:paramtypes", [mongoose_1.Model, Object])
], SelfService);
//# sourceMappingURL=self.service.js.map