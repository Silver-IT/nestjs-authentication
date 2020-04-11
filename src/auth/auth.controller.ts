import { Controller, Post, Body, UnauthorizedException, UseGuards, Get, Request } from '@nestjs/common';
import { LoginDto } from 'src/users/dtos/login.dto';
import { AuthService } from './auth.service';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from './jwt-auth.guard';
import { User } from 'src/entities/user.entity';
import { RegisterUserDto } from 'src/users/dtos/register-user.dto';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}  

    @Post('login')
    async login(@Body() body: LoginDto) {
      const user = await this.authService.validateUser(body.email, body.password);
      if (!user) {
        throw new UnauthorizedException();
      }
      return this.authService.login(user);
    }
  
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
      return req.user;
    }
  
    @ApiOkResponse({ type: User })
    @Post('register')
    async register(@Body() registerDto: RegisterUserDto): Promise<User> {
      return this.authService.register(registerDto);
    }
}
