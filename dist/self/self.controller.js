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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelfController = void 0;
const common_1 = require("@nestjs/common");
const self_service_1 = require("./self.service");
const update_self_dto_1 = require("./dto/update-self.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let SelfController = class SelfController {
    constructor(selfService) {
        this.selfService = selfService;
    }
    create(req, body) {
        return this.selfService.regSelfIntro(body, req.user);
    }
    findAll(page, limit) {
        return this.selfService.selfInfoList(limit, page);
    }
    findOne(id) {
        return this.selfService.selfDetail(+id);
    }
    update(id, updateSelfDto) {
        return this.selfService.update(+id, updateSelfDto);
    }
    remove(id) {
        return this.selfService.remove(+id);
    }
};
exports.SelfController = SelfController;
__decorate([
    (0, common_1.Post)('/regSelfIntro'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)('body')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], SelfController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('/selfInfoList'),
    __param(0, (0, common_1.Body)('page')),
    __param(1, (0, common_1.Body)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], SelfController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SelfController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_self_dto_1.UpdateSelfDto]),
    __metadata("design:returntype", void 0)
], SelfController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SelfController.prototype, "remove", null);
exports.SelfController = SelfController = __decorate([
    (0, common_1.Controller)('self'),
    __metadata("design:paramtypes", [self_service_1.SelfService])
], SelfController);
//# sourceMappingURL=self.controller.js.map