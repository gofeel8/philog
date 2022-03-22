import {
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guard/jwtAuth.guard';
import { LocalAuthGuard } from './guard/localAuth.guard';

@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req, @Res({ passthrough: true }) res) {
    const { accessToken, userId } = await this.authService.login(req.user);
    res.cookie('jwt', accessToken, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 6,
    });
    res.send(userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get('checkToken')
  getProfile(@Req() req) {
    const userInfo = req.user;
    return userInfo;
  }

  @Post('logout')
  remoceCookie(@Res({ passthrough: true }) res) {
    res.clearCookie('jwt');
  }
}
