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
exports.MeetingController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const meeting_service_1 = require("./meeting.service");
const create_meeting_dto_1 = require("./dto/create-meeting.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const meeting_schema_1 = require("./schema/meeting.schema");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let MeetingController = class MeetingController {
    constructor(meetingService, meetingModel) {
        this.meetingService = meetingService;
        this.meetingModel = meetingModel;
    }
    create(req, createMeetingDto) {
        console.log('regMeeting Call');
        return this.meetingService.regMeeting(req.user, createMeetingDto);
    }
    async reqParticipation(meetingId, groupId) {
        return this.meetingService.reqParticipation(meetingId, groupId);
    }
    selMeeting(meetingId) {
        return this.meetingService.selMeeting(meetingId);
    }
    selMeetingList(limit, page) {
        return this.meetingService.selMeetingList(limit, page);
    }
    remove(limit, page, meetId) {
        return this.meetingService.selReqList(limit, page, meetId);
    }
    imgTest(limit, files) {
        console.log('files info', files);
        return this.meetingService.other(limit, files);
    }
};
exports.MeetingController = MeetingController;
__decorate([
    (0, common_1.Post)('/regMeeting'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_meeting_dto_1.CreateMeetingDto]),
    __metadata("design:returntype", void 0)
], MeetingController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('/reqParticipation'),
    __param(0, (0, common_1.Body)('meetingId')),
    __param(1, (0, common_1.Body)('groupId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MeetingController.prototype, "reqParticipation", null);
__decorate([
    (0, common_1.Get)('/selMeeting'),
    __param(0, (0, common_1.Body)('meetingId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MeetingController.prototype, "selMeeting", null);
__decorate([
    (0, common_1.Get)('/selMeetingList'),
    __param(0, (0, common_1.Body)('limit')),
    __param(1, (0, common_1.Body)('page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], MeetingController.prototype, "selMeetingList", null);
__decorate([
    (0, common_1.Get)('/selReqList'),
    __param(0, (0, common_1.Body)('limit')),
    __param(1, (0, common_1.Body)('page')),
    __param(2, (0, common_1.Body)('meetId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", void 0)
], MeetingController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)('/imgTest'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('files', 5)),
    __param(0, (0, common_1.Body)('limit')),
    __param(1, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], MeetingController.prototype, "imgTest", null);
exports.MeetingController = MeetingController = __decorate([
    (0, common_1.Controller)('meeting'),
    __param(1, (0, mongoose_2.InjectModel)(meeting_schema_1.Meeting.name)),
    __metadata("design:paramtypes", [meeting_service_1.MeetingService,
        mongoose_1.Model])
], MeetingController);
//# sourceMappingURL=meeting.controller.js.map