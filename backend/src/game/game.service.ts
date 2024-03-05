import { UsersService } from './../users/users.service';
import { GamesRepository } from './game.repository';
import { Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game, GameDocument } from './schemas/game.schema';
import { GeneralUtils } from 'src/utils/general.util';
import { RoundDto } from './dto/round.dto';

@Injectable()
export class GameService {
  constructor (
    private readonly  gamesRepository : GamesRepository,
    private readonly  usersService : UsersService
    ) {}
  
  create(createGameDto: CreateGameDto) : Promise<GameDocument> {
    return this.gamesRepository.create(createGameDto);
  }

  findAll()  : Promise<Game[]>{
    return this.gamesRepository.find({});
  }

  findOne(id: string) : Promise<Game> {
    return this.gamesRepository.findOne({_id: id});
  }

  update(id: string, updateGameDto: UpdateGameDto) : Promise<Game> {
    return this.gamesRepository.findOneAndUpdate({_id :id} , updateGameDto)
  }

  remove(id: string) : Promise<number> {
    return this.gamesRepository.deleteMany({_id: id});
  }

  getCpuData(botsNumber : number) {
    const cpuData = [];
    for (let i = 0; i < botsNumber; i++) {
      cpuData.push(this.generateCpuEntry(i));
    }
    return cpuData;
  }

  generateCpuEntry(index) { 
    return { 
      name : `CPU ${index}`,
      points: GeneralUtils.generateRandomInt(0, 100),
      multiplier: GeneralUtils.generateRandomFloat(0, 10 , 2)
    }
  }

  
  async startNextRound( roundDto: RoundDto) {
    const game = await this.gamesRepository.findOne({ _id :  roundDto.gameId })
    
      game.round += 1;
      game.lastRoundData = [
        {
          name : 'You',
          points: roundDto.points,
          multiplier: roundDto.multiplier
        },
        ...this.getCpuData(4)
      ]; // Reset round-specific data
      await game.save();
      return game;
    }
  }






