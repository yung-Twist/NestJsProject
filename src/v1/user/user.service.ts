import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity'
import * as crypto from 'crypto-js'
@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {}
    
    

    async register(username:string,password:string): Promise<any>{
        const user = new User();
        user.username = username;
        user.password = crypto.MD5(password).toString();
        try{
            return await this.usersRepository.save(user)
        }catch{
            return null
        }
    }

    findOne(username: string): Promise<User> {
        return this.usersRepository.findOne({
            where:{
                username
            }
        });
    }
}
