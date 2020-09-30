import { IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';

export class RegisterDto{
    @IsNotEmpty()
    username: string

    @IsNotEmpty()
    password: string

}