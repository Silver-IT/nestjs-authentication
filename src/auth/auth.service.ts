import { Injectable } from '@nestjs/common';
import { compare } from 'bcrypt';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/entities/user.entity';
import { RegisterUserDto } from 'src/users/dtos/register-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, pass: string): Promise<User> {
    const user = await this.usersService.findByEmail(email);
    if (user && await compare(pass, user.password)) {
      return user;
    }
    return null;
  }

  async login(user: any) {
    const payload = { name: user.name, email: user.email, code: user.code, role: user.role.name, organization: user.organization.name };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  async register(userDto: RegisterUserDto): Promise<User> {
    return this.usersService.register(userDto);
  }
}
