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
import mongoose, { Document } from 'mongoose';
export type MeetingDocument = Meeting & Document;
export declare class Meeting {
    createdAt: Date;
    updatedAt: Date;
    founderId: mongoose.Schema.Types.ObjectId;
    mintGroupId: mongoose.Schema.Types.ObjectId;
    title: string;
    body: string;
    region: string;
    coordinates: string;
    time: mongoose.Schema.Types.Date;
    maxMember: number;
    matching: boolean;
    deposit: number;
    maleGroup: boolean;
    femaleGroup: boolean;
    gender: string;
    qrCode: string;
    matchGroupId: mongoose.Schema.Types.ObjectId;
}
export declare const MeetingSchema: mongoose.Schema<Meeting, mongoose.Model<Meeting, any, any, any, mongoose.Document<unknown, any, Meeting> & Meeting & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Meeting, mongoose.Document<unknown, {}, mongoose.FlatRecord<Meeting>> & mongoose.FlatRecord<Meeting> & {
    _id: mongoose.Types.ObjectId;
}>;
