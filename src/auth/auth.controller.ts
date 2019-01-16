import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Billet } from '../billet/billet.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post()
  async login(@Body() LoginBillet: Billet) {
    return await this.authService.validateBilletByNumero(LoginBillet);
  }
}
