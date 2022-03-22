import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/createBoard.dto';
import { Role } from 'src/auth/roles.decorator';
import { JwtAuthGuard } from 'src/auth/guard/jwtAuth.guard';
import { RolesGuard } from 'src/auth/guard/roles.guard';

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
}
