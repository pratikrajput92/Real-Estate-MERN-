import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { RolesGuard } from './roles.guard';
import { Roles } from './roles.decorators';

@Controller('auth')
export class AuthController {

 constructor(private readonly authService: AuthService){}
  
 @Post('signup')
  signupUser(@Body() body: any){
  return this.authService.signupUser(body);
   
 }
 
 @UseGuards(JwtAuthGuard, RolesGuard)
 @Roles('admin')
 @Post('admin/signup')
  signupAdmin(@Body() body: any){
    return this.authService.signupAdmin(body);
  }

 @Post('login')
  loginUser(@Body() body: any) {
    return this.authService.login(body.email, body.password);
  }

  @Post('admin/login')
   loginAdmin (@Body() body: any) {
    return this.authService.login(body.email, body.password, 'admin');
   }

}

