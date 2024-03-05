import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EntityRepository } from 'src/database/entity.repository';
import { Game, GameDocument } from './schemas/game.schema';

@Injectable()
export class GamesRepository extends EntityRepository<GameDocument> {
  constructor(@InjectModel(Game.name) GameModel: Model<GameDocument>) {
    super(GameModel);
  }
}
