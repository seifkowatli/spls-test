import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument, SchemaTypes } from 'mongoose';
import { User } from 'src/users/schemas/user.schema';

export type GameDocument = HydratedDocument<Game>;

@Schema({ timestamps: true })
export class Game {
  @ApiProperty()
  @Prop({
    type: SchemaTypes.ObjectId,
    ref: User.name,
    autopopulate: true,
  })
  player: User;

  @ApiProperty()
  @Prop()
  lastRoundData: Record<string, unknown>[];

  @ApiProperty()
  @Prop({
    default : 1
  })
  round: number;
}

export const GameSchema = SchemaFactory.createForClass(Game);
