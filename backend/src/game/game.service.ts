import { Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';

@Injectable()
export class GameService {
  create(createGameDto: CreateGameDto) {
    return 'This action adds a new game';
  }

  findAll() {
    return `This action returns all game`;
  }

  findOne(id: number) {
    return `This action returns a #${id} game`;
  }

  update(id: number, updateGameDto: UpdateGameDto) {
    return `This action updates a #${id} game`;
  }

  remove(id: number) {
    return `This action removes a #${id} game`;
  }

  async createGame(gameId: string) {
    const game = new this.gameModel({ gameId, players: [] });
    await game.save();
  }

  async joinGame(gameId: string, player: Socket) {
    const game = await this.gameModel.findOne({ gameId });
    if (game) {
      game.players.push(player.id);
      await game.save();
      player.join(gameId);
    }
  }

  async getPlayersInGame(gameId: string): Promise<string[]> {
    const game = await this.gameModel.findOne({ gameId });
    return game?.players || [];
  }
  
  async getCurrentRound(gameId: string): Promise<number> {
    const game = await this.gameModel.findOne({ gameId });
    return game?.currentRound || 0;
  }

  async startNextRound(gameId: string) {
    const game = await this.gameModel.findOne({ gameId });
    if (game && game.currentRound < game.maxRounds) {
      game.currentRound += 1;
      game.roundData = []; // Reset round-specific data
      await game.save();
      this.server.to(gameId).emit('nextRound', game.currentRound);
    }
  }

}
