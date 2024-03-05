import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {

  @ApiProperty()
  @Prop({
    required: true,
    unique: true,
  })
  email: string;

  @ApiProperty()
  @Prop({
    required: true,
  })
  name: string;
  
  @ApiProperty()
  @Prop()
  points: number;

}

export const UserSchema = SchemaFactory.createForClass(User);




