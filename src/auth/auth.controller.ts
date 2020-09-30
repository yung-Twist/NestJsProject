import { Controller, Post, Body, Res, UnauthorizedException} from '@nestjs/common';
import { LoginDto } from './Dto/loginDto'
import { AuthService } from './auth.service'
@Controller('auth')
export class AuthController {

    constructor( private readonly authService: AuthService){}

    @Post('login')
    async login(@Body() body : LoginDto, @Res() res){
        let result = await this.authService.validateUser(body.username, body.password)
        let data = await this.authService.login(result)
        if(result){
            res.status(200).json({
                data:data,
                messge:"登录成功"
            })
        }else{
            throw new UnauthorizedException()
        }
    }


    
}
