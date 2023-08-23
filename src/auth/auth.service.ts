import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async authenticate(email: string, password: string): Promise<any> {
    const user = (await this.userService.findByEmail(email)) as any;

    if (user && user.password === password) {
      return user;
    }

    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return { access_token: await this.jwtService.signAsync(payload) };
  }
}
