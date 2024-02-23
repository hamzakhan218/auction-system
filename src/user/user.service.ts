import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService) {}

    async getAllUsers(): Promise<User[] | []>{
        return this.prisma.user.findMany();
    }

    async getUser(id: number): Promise<User>{
        return this.prisma.user.findUnique({where: {id: Number(id)}});
    }

    async createUser(user: User){
        return this.prisma.user.create({
            data: {
                ...user,
                registrationDate: new Date()
            }
        });
    }

    async deleteUser(id: number){
        const user = await this.getUser(id);
        console.log(user)
        if(!user)
            return JSON.stringify({message: 'User not found'});

        return this.prisma.user.delete({
            where: {id: Number(id)}
        });
    }
}
