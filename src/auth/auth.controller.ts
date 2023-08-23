import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  /**
   * Endpoint to handle login authentication
   */
  @UseGuards(AuthGuard('local'))
  @Post('/login')
  index(@Request() req: any) {
    return this.authService.login(req.user);
  }
}
