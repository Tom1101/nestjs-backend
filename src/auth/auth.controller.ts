import { Controller, Post, Body, Get, Param, HttpException, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Billet } from '../billet/billet.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {
  }

  @Post()
  async login(@Body() numeroBillet) {
    return await this.authService.validateBilletByNumero(numeroBillet);
  }

  @Get('/:numeroBillet')
  async checkBillet(@Param('numeroBillet') numeroBillet) {
    const billet: Billet = await this.authService.findBilletByNumero(numeroBillet);
    if (billet === undefined) {
      throw new HttpException('Invalid Billet Numero', HttpStatus.BAD_REQUEST);
    }
    return billet;
  }
}
