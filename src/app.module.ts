import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [BookModule, ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
