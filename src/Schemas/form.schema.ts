import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from './user.schema';
import { ApiProperty } from '@nestjs/swagger';

export type formDocument = HydratedDocument<Form>;

@Schema()
export class Form {
  @ApiProperty({ description: 'this is form title', type: String })
  @Prop()
  title: string;
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
  @Prop()
  formfield: [
    {
      custom: string;
    },
  ];
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  @ApiProperty({ description: 'this is userId', type: () => User })
  userId: User;
}

export const formSchema = SchemaFactory.createForClass(Form);
