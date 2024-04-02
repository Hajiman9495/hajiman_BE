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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const user_schema_1 = require("./schema/user.schema");
const group_schema_1 = require("./schema/group.schema");
let UserService = class UserService {
    constructor(userModel, groupModel) {
        this.userModel = userModel;
        this.groupModel = groupModel;
    }
    async regGroup(req, creategroupDto) {
        creategroupDto.members = [req];
        const leaderInfo = await this.userModel.findOne({ _id: req }).select('gender').lean();
        creategroupDto.gender = leaderInfo.gender;
        const regGroupData = await new this.groupModel(creategroupDto).save();
        return regGroupData;
    }
    async selGroup(req, groupId) {
        console.log('@Body() ', groupId);
        const findPh = await this.userModel.findOne({ _id: req }).lean();
        const findGroup = await this.groupModel.findOne({ _id: groupId }).lean();
        const phList = findGroup.phList;
        if (!phList.includes(findPh.phone)) {
            throw new common_1.UnauthorizedException('Permission Error');
        }
        console.log('findGroup', findGroup);
        return findGroup;
    }
    async joinGroup(req, groupId) {
        let findGroup = await this.groupModel.findOne({ _id: groupId });
        console.log('HERE', findGroup);
        findGroup.members.push(req);
        let calmem = Number(findGroup.currMember) + 1;
        if (calmem > Number(findGroup.maxMember)) {
            throw new common_1.HttpException('over member error', 404);
        }
        const updGroup = await this.groupModel
            .findOneAndUpdate({ _id: groupId }, { members: findGroup.members, $inc: { currMamber: 1 } }, { new: true })
            .lean();
        return updGroup;
    }
    async update(id, token) {
        const updateUser = await this.userModel.findOneAndUpdate({ id: id }, { token: token }).lean();
        return updateUser;
    }
    remove(id) {
        return `This action removes a #${id} user`;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(user_schema_1.User.name)),
    __param(1, (0, mongoose_2.InjectModel)(group_schema_1.Group.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model])
], UserService);
//# sourceMappingURL=user.service.js.map