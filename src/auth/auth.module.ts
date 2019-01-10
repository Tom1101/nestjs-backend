import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { BilletModule } from '../billet/billet.module';
import { BilletService } from '../billet/billet.service';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt', session: false }),
    JwtModule.register({
      secretOrPrivateKey: 'check123check',
      signOptions: {
        expiresIn: 3600,
      },
    }), BilletModule],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, BilletService],
})
export class AuthModule {
}
