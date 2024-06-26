"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeetingModule = void 0;
const common_1 = require("@nestjs/common");
const meeting_service_1 = require("./meeting.service");
const meeting_controller_1 = require("./meeting.controller");
const meeting_schema_1 = require("./schema/meeting.schema");
const requestList_schema_1 = require("./schema/requestList.schema");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("../user/schema/user.schema");
const multer_controller_1 = require("../multer/multer.controller");
const multer_service_1 = require("../multer/multer.service");
let MeetingModule = class MeetingModule {
};
exports.MeetingModule = MeetingModule;
exports.MeetingModule = MeetingModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: meeting_schema_1.Meeting.name, schema: meeting_schema_1.MeetingSchema },
                { name: user_schema_1.User.name, schema: user_schema_1.UserSchema },
                { name: requestList_schema_1.requestList.name, schema: requestList_schema_1.requestListSchema },
            ]),
        ],
        controllers: [meeting_controller_1.MeetingController],
        providers: [meeting_service_1.MeetingService, multer_controller_1.MulterController, multer_service_1.MulterService],
    })
], MeetingModule);
//# sourceMappingURL=meeting.module.js.map