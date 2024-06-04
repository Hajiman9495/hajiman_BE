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
exports.MulterController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_service_1 = require("./multer.service");
let MulterController = class MulterController {
    constructor(multerService) {
        this.multerService = multerService;
    }
    async uploadS3(files, folder) {
        console.log('?????????');
        let i = 0;
        console.log('files??? ====>', folder);
        const imgurl = [];
        await Promise.all(files.map(async (file) => {
            i++;
            const key = await this.multerService.uploadImage(file, folder);
            console.log('path?:', key);
            imgurl.push(String(key));
        }));
        console.log('?????????', i);
        return {
            statusCode: 201,
            message: `이미지 등록 성!공`,
            data: imgurl,
        };
    }
    async selMeeting(files) {
        console.log('?');
        console.log('Test!@');
    }
};
exports.MulterController = MulterController;
__decorate([
    (0, common_1.Post)('upl'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('files', 5)),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Body)('folder')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], MulterController.prototype, "uploadS3", null);
__decorate([
    (0, common_1.Post)('/test'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('files', 5)),
    __param(0, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MulterController.prototype, "selMeeting", null);
exports.MulterController = MulterController = __decorate([
    (0, common_1.Controller)('multer'),
    __metadata("design:paramtypes", [multer_service_1.MulterService])
], MulterController);
//# sourceMappingURL=multer.controller.js.map