/// <reference types="multer" />
/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose-paginate-v2" />
import { CreateMeetingDto } from './dto/create-meeting.dto';
import mongoose, { Model, ObjectId, PaginateModel } from 'mongoose';
import { Meeting, MeetingDocument } from './schema/meeting.schema';
import { UserDocument } from '../user/schema/user.schema';
import { requestList, requestListDocument } from './schema/requestList.schema';
export declare class MeetingService {
    private meetingModel;
    private userModel;
    private reqListModel;
    constructor(meetingModel: PaginateModel<MeetingDocument>, userModel: Model<UserDocument>, reqListModel: PaginateModel<requestListDocument>);
    regMeeting(req: any, createMeetingDto: CreateMeetingDto): Promise<mongoose.Document<unknown, {}, MeetingDocument> & Meeting & mongoose.Document<any, any, any> & {
        _id: mongoose.Types.ObjectId;
    }>;
    reqParticipation(meetingInfo: ObjectId, groupId: ObjectId): Promise<mongoose.Document<unknown, {}, requestListDocument> & requestList & mongoose.Document<any, any, any> & {
        _id: mongoose.Types.ObjectId;
    }>;
    selMeeting(meetingId: ObjectId): Promise<mongoose.FlattenMaps<MeetingDocument> & {
        _id: mongoose.Types.ObjectId;
    }>;
    selMeetingList(limit: number, page: number): Promise<mongoose.PaginateResult<mongoose.Document<unknown, {
        sort: {
            createdAt: number;
        };
        limit: number;
        page: number;
    }, MeetingDocument> & Meeting & mongoose.Document<any, any, any> & {
        _id: mongoose.Types.ObjectId;
    }>>;
    selReqList(limit: number, page: number, meetId: ObjectId): Promise<mongoose.PaginateResult<mongoose.Document<unknown, {
        sort: {
            createdAt: number;
        };
        limit: number;
        page: number;
    }, requestListDocument> & requestList & mongoose.Document<any, any, any> & {
        _id: mongoose.Types.ObjectId;
    }>>;
    other(limit: number, file: Express.Multer.File): Promise<string>;
}
