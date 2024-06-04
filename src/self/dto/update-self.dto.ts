import { PartialType } from '@nestjs/mapped-types';
import { CreateSelfDto } from './create-self.dto';

export class UpdateSelfDto extends PartialType(CreateSelfDto) {}
