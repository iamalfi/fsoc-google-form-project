import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import mongoose from 'mongoose';

export class CreateFormDto {
  @ApiProperty({ description: 'this is form title', type: String })
  @IsNotEmpty()
  @IsString()
  title: string;
  @IsNotEmpty()
  // @IsString()
  @ApiProperty({
    description: 'this is form feild',
    type: 'array',
    items: {
      type: 'object',
      properties: {
        custom: { type: 'string' },
      },
    },
  })
  formfield: string[];
  @IsNotEmpty()
  @ApiProperty({
    description: 'this is userId',
    type: String,
  })
  @IsMongoId()
  userId: string;
}
