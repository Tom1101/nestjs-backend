import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtPayload } from './interface/jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';
import { BilletService } from '../billet/billet.service';
import { Billet } from '../billet/billet.entity';

@Injectable()
export class AuthService {

  constructor(private billetService: BilletService, private jwtService: JwtService) {
  }

  async validateBilletByNumero(numeroBillet) {
    // This will be used for the initial login
    const billetToAttempt = await this.billetService.findOneByNumero(numeroBillet);
    return new Promise((resolve) => {
      if (billetToAttempt) {
        return this.createJwtPayload(billetToAttempt);
      } else {
        throw new UnauthorizedException();
      }
    });
  }

  async findBilletByNumero(numeroBillet) {
    return await this.billetService.findOneByNumero(numeroBillet);
  }

  async validateBilletByJwt(payload: JwtPayload) {

    // This will be used when the user has already logged in and has a JWT
    const billet = await this.billetService.findOneByNumero(payload);

    if (billet) {
      return this.createJwtPayload(billet);
    } else {
      throw new UnauthorizedException();
    }

  }

  createJwtPayload(billet) {

    const data: JwtPayload = {
      numero: billet,
    };

    const jwt = this.jwtService.sign(data);

    return {
      expiresIn: 3600,
      token: jwt,
    };

  }
}
