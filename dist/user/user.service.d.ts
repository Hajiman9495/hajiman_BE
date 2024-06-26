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
import { CreateGroupDto } from './dto/create-group.dto';
import { Model, ObjectId } from 'mongoose';
import { UserDocument } from './schema/user.schema';
import { GroupDocument } from './schema/group.schema';
export declare class UserService {
    private userModel;
    private groupModel;
    constructor(userModel: Model<UserDocument>, groupModel: Model<GroupDocument>);
    regGroup(req: any, creategroupDto: CreateGroupDto): Promise<any>;
    selGroup(req: any, groupId: ObjectId): Promise<import("mongoose").FlattenMaps<GroupDocument> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    joinGroup(req: any, groupId: ObjectId): Promise<import("mongoose").FlattenMaps<GroupDocument> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, token: string): Promise<import("mongoose").FlattenMaps<UserDocument> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(id: number): string;
}
