import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import mongoose from 'mongoose';

export class CreateFormDto {
  @ApiProperty({ description: 'this is form title', type: String })
  @IsNotEmpty()
  @IsString()
  title: string;
  @IsNotEmpty()
  description: string;
  formFields: [];
  @IsNotEmpty()
  @ApiProperty({
    description: 'this is userId',
    type: String,
  })
  @IsMongoId()
  userId: string;
}
