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
import { UserService } from './user.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { ObjectId } from 'mongoose';
import { Request } from 'express';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    regGroup(req: Request, creategroupDto: CreateGroupDto): Promise<any>;
    selGroup(req: Request, groupId: ObjectId): Promise<import("mongoose").FlattenMaps<import("./schema/group.schema").GroupDocument> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    joinGroup(req: Request, groupId: ObjectId): Promise<import("mongoose").FlattenMaps<import("./schema/group.schema").GroupDocument> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, token: string): Promise<import("mongoose").FlattenMaps<import("./schema/user.schema").UserDocument> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(id: string): string;
}
