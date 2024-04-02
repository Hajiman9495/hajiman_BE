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
import { MeetingService } from './meeting.service';
import { CreateMeetingDto } from './dto/create-meeting.dto';
import { Meeting, MeetingDocument } from './schema/meeting.schema';
import { Request } from 'express';
import mongoose, { Model, ObjectId } from 'mongoose';
export declare class MeetingController {
    private readonly meetingService;
    private meetingModel;
    constructor(meetingService: MeetingService, meetingModel: Model<MeetingDocument>);
    create(req: Request, createMeetingDto: CreateMeetingDto): Promise<mongoose.Document<unknown, {}, MeetingDocument> & Meeting & mongoose.Document<any, any, any> & {
        _id: mongoose.Types.ObjectId;
    }>;
    reqParticipation(meetingId: ObjectId, groupId: ObjectId): Promise<mongoose.Document<unknown, {}, import("./schema/requestList.schema").requestListDocument> & import("./schema/requestList.schema").requestList & mongoose.Document<any, any, any> & {
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
    remove(limit: number, page: number, meetId: ObjectId): Promise<mongoose.PaginateResult<mongoose.Document<unknown, {
        sort: {
            createdAt: number;
        };
        limit: number;
        page: number;
    }, import("./schema/requestList.schema").requestListDocument> & import("./schema/requestList.schema").requestList & mongoose.Document<any, any, any> & {
        _id: mongoose.Types.ObjectId;
    }>>;
    imgTest(limit: number, files: any): Promise<string>;
}
