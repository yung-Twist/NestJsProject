import { Injectable } from '@nestjs/common';
import { UserService } from '../v1/user/user.service'
import * as crypto from 'crypto-js'
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {

    constructor(
      private readonly usersService : UserService,
      private readonly jwtService: JwtService
      ){}

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.usersService.findOne(username);

        if (user && user.password === crypto.MD5(password).toString()) {
          return user;
        }
        return null;
    }
    
    async login(user: any) {
      const payload = { username: user.username, id: user.id };
      return {
        data:{
          username:user.username,
          id:user.id
        },
        access_token: this.jwtService.sign(payload),
      };
    }
}
