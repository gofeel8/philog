import { ForbiddenException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto): Promise<any> {
    const isExist = await this.userRepository.findOne({
      userId: createUserDto.userId,
    });
    if (isExist) {
      throw new ForbiddenException({
        statusCode: HttpStatus.FORBIDDEN,
        message: [`이미 등록된 사용자입니다.`],
        error: 'Forbidden',
      });
    }
    const saltOrRountds = 10;
    createUserDto.password = await bcrypt.hash(
      createUserDto.password,
      saltOrRountds,
    );
    const { password, ...result } = await this.userRepository.save(
      createUserDto,
    );
    return result;
  }
}
