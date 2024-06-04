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
import { UpdateSelfDto } from './dto/update-self.dto';
import { UserDocument } from '../user/schema/user.schema';
import { selfIntro, selfIntroDocument } from './schema/selfIntro.schema';
import mongoose, { Model, PaginateModel } from 'mongoose';
export declare class SelfService {
    private userModel;
    private selfModel;
    constructor(userModel: Model<UserDocument>, selfModel: PaginateModel<selfIntroDocument>);
    regSelfIntro(body: string, accoutId: any): Promise<mongoose.Document<unknown, {}, selfIntroDocument> & selfIntro & mongoose.Document<any, any, any> & {
        _id: mongoose.Types.ObjectId;
    }>;
    selfInfoList(limit: number, page: number): Promise<mongoose.PaginateResult<mongoose.Document<unknown, {
        sort: {
            createdAt: number;
        };
        limit: number;
        page: number;
    }, selfIntroDocument> & selfIntro & mongoose.Document<any, any, any> & {
        _id: mongoose.Types.ObjectId;
    }>>;
    selfDetail(id: number): Promise<string>;
    update(id: number, updateSelfDto: UpdateSelfDto): string;
    remove(id: number): string;
}
