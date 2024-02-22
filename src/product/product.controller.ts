import { Body, Controller, Delete, Get, HttpCode, Param, Post } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('api/v1/product')
export class ProductController {
    constructor(private readonly productService: ProductService){}

    @Get()
    async getAllProducts(){
        return this.productService.getAllProducts();
    }

    @Get(':id')
    async getUsersProducts(@Param('id') id: number){
        return this.productService.getUsersProducts(id);
    }

    @Post(':id')
    async createProduct(@Param('id') id: number, @Body() product){
        return this.productService.createProduct(id, product);
    }

    @HttpCode(204)
    @Delete(':id')
    async deleteProduct(@Param('id') id: number){
        return this.productService.deleteProduct(id);
    }
}
