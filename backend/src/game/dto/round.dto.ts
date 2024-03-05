import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class RoundDto {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    userId : string;
    
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    gameId : string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    points : number;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    multiplier : number;

}
