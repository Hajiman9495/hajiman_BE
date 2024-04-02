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
exports.MeetingService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const meeting_schema_1 = require("./schema/meeting.schema");
const user_schema_1 = require("../user/schema/user.schema");
const requestList_schema_1 = require("./schema/requestList.schema");
const moment = require("moment");
const qrcode = require("qrcode");
let MeetingService = class MeetingService {
    constructor(meetingModel, userModel, reqListModel) {
        this.meetingModel = meetingModel;
        this.userModel = userModel;
        this.reqListModel = reqListModel;
    }
    async regMeeting(req, createMeetingDto) {
        console.log('->>>', req);
        const regQr = await qrcode.toDataURL(req);
        console.log('->>>', createMeetingDto);
        const findUser = await this.userModel.findOne({ _id: req }).select('gender').lean();
        let saveMeet = new this.meetingModel({
            founder: req,
            title: createMeetingDto.title,
            body: createMeetingDto.body,
            region: createMeetingDto.region,
            localtion: createMeetingDto.localtion,
            time: createMeetingDto.time,
            maxMember: createMeetingDto.maxMember,
            deposit: createMeetingDto.deposit,
            qrCode: regQr,
        });
        findUser.gender == 'man' ? (saveMeet.maleGroup = true) : (saveMeet.femaleGroup = true);
        const createMeet = await new this.meetingModel(saveMeet).save();
        console.log(createMeet);
        return createMeet;
    }
    async reqParticipation(meetingInfo, groupId) {
        let now = moment();
        const newList = new this.reqListModel({
            meetId: meetingInfo,
            groupId: groupId,
            requestTime: moment(),
            deadline: now.add(1, 'days'),
        });
        const regDoc = await new this.reqListModel(newList).save();
        return regDoc;
    }
    async selMeeting(meetingId) {
        console.log(meetingId);
        const meetingInfo = await this.meetingModel.findById({ _id: meetingId }).lean();
        return meetingInfo;
    }
    async selMeetingList(limit, page) {
        const meetingInfo = await this.meetingModel.paginate({ matching: false }, { sort: { createdAt: -1 }, limit: limit, page: page });
        return meetingInfo;
    }
    async selReqList(limit, page, meetId) {
        const reqInfoList = await this.reqListModel.paginate({ meetId: meetId }, { sort: { createdAt: -1 }, limit: limit, page: page });
        return reqInfoList;
    }
    async other(limit, file) {
        console.log(limit);
        console.log(file);
        return 'd';
    }
};
exports.MeetingService = MeetingService;
exports.MeetingService = MeetingService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(meeting_schema_1.Meeting.name)),
    __param(1, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __param(2, (0, mongoose_1.InjectModel)(requestList_schema_1.requestList.name)),
    __metadata("design:paramtypes", [Object, mongoose_2.Model, Object])
], MeetingService);
//# sourceMappingURL=meeting.service.js.map