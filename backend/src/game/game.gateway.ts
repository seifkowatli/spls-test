import { WebSocketGateway, SubscribeMessage, MessageBody, AbstractWsAdapter, WebSocketServer } from '@nestjs/websockets';
import { GameService } from './game.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Server, Socket } from 'socket.io';
import { RoundDto } from './dto/round.dto';

@WebSocketGateway()
export class GameGateway {
  constructor(private readonly gameService: GameService) {}

  @WebSocketServer()
  server: Server;


  @SubscribeMessage('createGame')
  async create(@MessageBody() createGameDto: CreateGameDto , client: Socket) {
    const game =  await this.gameService.create(createGameDto);
    client.emit('gameCreated', game);
    return game; 
  }

  @SubscribeMessage('findAllGame')
  findAll() {
    return this.gameService.findAll();
  }

  @SubscribeMessage('findOneGame')
  findOne(@MessageBody() id: string) {
    return this.gameService.findOne(id);
  }

  @SubscribeMessage('updateGame')
  update(@MessageBody() updateGameDto: UpdateGameDto) {
    return this.gameService.update(updateGameDto.id, updateGameDto);
  }

  @SubscribeMessage('removeGame')
  remove(@MessageBody() id: string) {
    return this.gameService.remove(id);
  }


  @SubscribeMessage('startNextRound')
  async handleStartNextRound(@MessageBody() roundDto: RoundDto, client: Socket) {
    const updatedGame =  await this.gameService.startNextRound(roundDto);
    this.server.to(roundDto.gameId).emit('roundResults', updatedGame);
  }

}
