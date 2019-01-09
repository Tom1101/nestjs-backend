import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { BilletEntity } from '../billet/billet.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post()
  async login(@Body() LoginBillet: BilletEntity) {
    return await this.authService.validateBilletByNumero(LoginBillet);
  }
}
