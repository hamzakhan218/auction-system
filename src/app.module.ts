import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [BookModule, ProductModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
