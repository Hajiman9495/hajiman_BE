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
export type GroupDocument = Group & Document;
export declare class Group {
    leader: mongoose.Schema.Types.ObjectId;
    groupName: string;
    phList: [string];
    gender: string;
    maxMember: Number;
    currMember: Number;
    members: [string];
    staus: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export declare const GroupSchema: mongoose.Schema<Group, mongoose.Model<Group, any, any, any, mongoose.Document<unknown, any, Group> & Group & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Group, mongoose.Document<unknown, {}, mongoose.FlatRecord<Group>> & mongoose.FlatRecord<Group> & {
    _id: mongoose.Types.ObjectId;
}>;
