import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './models/user.schema';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  
  imports:[
    MongooseModule.forFeature([
      {name: User.name, schema: UserSchema},
    ]),
    JwtModule.register({
      secret: 'MY_SECRET_KEY',
      signOptions: {expiresIn: "7d" },
    }),
  ],

  controllers: [AuthController],
  providers: [AuthService,JwtStrategy]
})
export class AuthModule {}
