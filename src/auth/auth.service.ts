import { Injectable, Post, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { SignInDto } from './signInDto';
@ApiTags('login')
@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string) {
    const user = await this.userService.findByEmail(username);
    const validPassword = await bcrypt.compare(pass, user?.password);
    if (user == null || !validPassword) {
      return new UnauthorizedException();
    }
    const payload = { username: user.email, sub: user._id };
    return {
      user,
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
