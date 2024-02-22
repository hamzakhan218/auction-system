import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProductService {
    constructor(private readonly prisma: PrismaService){}

    async getAllProducts(): Promise<Product[] | []>{
        return this.prisma.product.findMany();
    }

    async getUsersProducts(id: number): Promise<Product[] | []>{
        return this.prisma.product.findMany({
            where: {
                ownerId: Number(id)
            }
        })
    }

    async createProduct(id: number, product: Product){
        return this.prisma.product.create({
            data: {
                ...product,
                ownerId: Number(id)
            }
        })
    }

    async deleteProduct(id: number){
        return this.prisma.product.delete({
            where: {
                id: Number(id)
            }
        })
    }
}