import { IsString } from 'class-validator';

export class CreateBoardDto {
  @IsString()
  category: string;

  @IsString()
  title: string;

  @IsString()
  content: string;
}
