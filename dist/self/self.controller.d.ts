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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose-paginate-v2" />
import { SelfService } from './self.service';
import { UpdateSelfDto } from './dto/update-self.dto';
import { Request } from 'express';
export declare class SelfController {
    private readonly selfService;
    constructor(selfService: SelfService);
    create(req: Request, body: string): Promise<import("mongoose").Document<unknown, {}, import("./schema/selfIntro.schema").selfIntroDocument> & import("./schema/selfIntro.schema").selfIntro & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(page: number, limit: number): Promise<import("mongoose").PaginateResult<import("mongoose").Document<unknown, {
        sort: {
            createdAt: number;
        };
        limit: number;
        page: number;
    }, import("./schema/selfIntro.schema").selfIntroDocument> & import("./schema/selfIntro.schema").selfIntro & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>>;
    findOne(id: string): Promise<string>;
    update(id: string, updateSelfDto: UpdateSelfDto): string;
    remove(id: string): string;
}
