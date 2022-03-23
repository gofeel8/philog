import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Board } from './entities/board.entity';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Board)
    private boardRepository: Repository<Board>,
  ) {}

  async create(CreateBoardDto): Promise<any> {
    const result = await this.boardRepository.save(CreateBoardDto);
    return result;
  }

  async find(): Promise<Board[]> {
    return this.boardRepository.find({
      select: ['seq', 'title', 'content', 'createdAt'],
      order: { seq: 'DESC' },
    });
  }
}
