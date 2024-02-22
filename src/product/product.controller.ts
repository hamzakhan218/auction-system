import { Body, Controller, Delete, Get, HttpCode, Param, Post, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('api/v1/product')
export class ProductController {
    constructor(private readonly productService: ProductService){}

    @Get()
    @UseGuards(JwtAuthGuard)
    async getAllProducts(){
        return this.productService.getAllProducts();
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard)
    async getUsersProducts(@Param('id') id: number){
        return this.productService.getUsersProducts(id);
    }

    @Post(':id')
    @UseGuards(JwtAuthGuard)
    async createProduct(@Param('id') id: number, @Body() product){
        return this.productService.createProduct(id, product);
    }

    @HttpCode(204)
    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    async deleteProduct(@Param('id') id: number){
        return this.productService.deleteProduct(id);
    }
}
