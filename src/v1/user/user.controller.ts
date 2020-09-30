import { Controller, Post, Res, Body, UseGuards, Get, HttpException } from '@nestjs/common';
import { UserService } from './user.service'
import { RegisterDto } from '../../common/Dto/user/registerDto'
import { AuthGuard } from '@nestjs/passport';
@Controller('user')
export class UserController {

    constructor(private readonly usersService : UserService){}

    @Post('register')
    async register(@Body() body : RegisterDto, @Res() res){
        let result = await this.usersService.register(body.username, body.password)
        if(result){
            let { username } = result
            res.status(200).json({
                data:{username},
                messge:'注册成功'
            })
        }else{
            throw new HttpException('注册失败',500)
        }
    }

    @Get('test')
    @UseGuards(AuthGuard('jwt'))
    test(){
        return 'cc'
    }
}
