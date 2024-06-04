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
export type selfIntroDocument = selfIntro & Document;
export declare class selfIntro {
    nick: string;
    body: string;
    like: number;
    delete: boolean;
    profileImg: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare const selfIntroSchema: mongoose.Schema<selfIntro, mongoose.Model<selfIntro, any, any, any, mongoose.Document<unknown, any, selfIntro> & selfIntro & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, selfIntro, mongoose.Document<unknown, {}, mongoose.FlatRecord<selfIntro>> & mongoose.FlatRecord<selfIntro> & {
    _id: mongoose.Types.ObjectId;
}>;
