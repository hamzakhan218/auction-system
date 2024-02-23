import { Body, Controller, Delete, Get, HttpCode, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '@prisma/client';

@Controller('api/v1/user')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Get()
    async getAllUsers(): Promise<User[] | []>{
        return this.userService.getAllUsers();
    }

    @Get(':id')
    async getUser(@Param('id') id: number): Promise<User>{
        return this.userService.getUser(id);
    }

    @Post()
    async createUser(@Body() user: User){
        return this.userService.createUser(user);
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: number){
        return this.userService.deleteUser(id);
    }
}
