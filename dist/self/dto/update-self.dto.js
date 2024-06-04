"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSelfDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_self_dto_1 = require("./create-self.dto");
class UpdateSelfDto extends (0, mapped_types_1.PartialType)(create_self_dto_1.CreateSelfDto) {
}
exports.UpdateSelfDto = UpdateSelfDto;
//# sourceMappingURL=update-self.dto.js.map