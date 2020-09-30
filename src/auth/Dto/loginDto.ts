import { IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';

export class LoginDto{
    @IsNotEmpty()
    username: string

    @IsNotEmpty()
    password: string

}