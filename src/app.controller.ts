import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { LocalAuthGuard } from './auth/auth.local-auth.guard';
import { AuthService } from './auth/auth.service';
import { Public } from './auth/decorators/public.decorator';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Public()
  @Get('/hello')
  getHello() {
    return { message: 'Hello world' };
  }
}
