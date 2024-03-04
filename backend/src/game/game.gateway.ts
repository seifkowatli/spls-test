import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { GameService } from './game.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';

@WebSocketGateway()
export class GameGateway {
  constructor(private readonly gameService: GameService) {}

  @SubscribeMessage('createGame')
  create(@MessageBody() createGameDto: CreateGameDto) {
    return this.gameService.create(createGameDto);
  }

  @SubscribeMessage('findAllGame')
  findAll() {
    return this.gameService.findAll();
  }

  @SubscribeMessage('findOneGame')
  findOne(@MessageBody() id: number) {
    return this.gameService.findOne(id);
  }

  @SubscribeMessage('updateGame')
  update(@MessageBody() updateGameDto: UpdateGameDto) {
    return this.gameService.update(updateGameDto.id, updateGameDto);
  }

  @SubscribeMessage('removeGame')
  remove(@MessageBody() id: number) {
    return this.gameService.remove(id);
  }

  @UseGuards(JwtAuthGuard)
  @SubscribeMessage('createGame')
  async handleCreateGame(@MessageBody() { gameId, maxRounds }: { gameId: string; maxRounds: number }, client: Socket) {
    await this.gameService.createGame(gameId, maxRounds);
    await this.gameService.joinGame(gameId, client);
    client.join(gameId);
    client.emit('gameCreated', gameId);
  }

  @UseGuards(JwtAuthGuard)
  @SubscribeMessage('startNextRound')
  async handleStartNextRound(@MessageBody() gameId: string, client: Socket) {
    await this.gameService.startNextRound(gameId);
  }

  @UseGuards(JwtAuthGuard)
  @SubscribeMessage('chat')
  handleChat(@MessageBody() message: string, client: Socket) {
    const roomId = Object.keys(client.rooms)[1];
    if (roomId) {
      this.server.to(roomId).emit('chat', { username: client.id, message });
    }
  }

  private leaveGameRoom(client: Socket) {
    const rooms = Object.keys(client.rooms);
    rooms.forEach((room) => client.leave(room));
  }
}
