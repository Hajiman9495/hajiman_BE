"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.selfIntroSchema = exports.selfIntro = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
let selfIntro = class selfIntro {
};
exports.selfIntro = selfIntro;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], selfIntro.prototype, "nick", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], selfIntro.prototype, "body", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], selfIntro.prototype, "like", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], selfIntro.prototype, "delete", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 'https://lmm-bucket.s3.ap-northeast-2.amazonaws.com/TSRT/blank-profile-picture-973460_1920.png' }),
    __metadata("design:type", String)
], selfIntro.prototype, "profileImg", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: new Date(), type: mongoose_2.default.Schema.Types.Date }),
    __metadata("design:type", Date)
], selfIntro.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: new Date(), type: mongoose_2.default.Schema.Types.Date }),
    __metadata("design:type", Date)
], selfIntro.prototype, "updatedAt", void 0);
exports.selfIntro = selfIntro = __decorate([
    (0, mongoose_1.Schema)({ timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } })
], selfIntro);
const schema = mongoose_1.SchemaFactory.createForClass(selfIntro);
schema.plugin(mongoosePaginate);
exports.selfIntroSchema = schema;
//# sourceMappingURL=selfIntro.schema.js.map