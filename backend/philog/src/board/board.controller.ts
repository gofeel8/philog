import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/createBoard.dto';
import { Role } from 'src/auth/roles.decorator';
import { JwtAuthGuard } from 'src/auth/guard/jwtAuth.guard';
import { RolesGuard } from 'src/auth/guard/roles.guard';
import { Board } from './entities/board.entity';

@Controller('api/board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Role('admin')
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createBoardDto: CreateBoardDto): Promise<any> {
    return this.boardService.create(createBoardDto);
  }

  @Get()
  find(): Promise<Board[]> {
    return this.boardService.find();
  }
}
