import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [BookModule, ProductModule, AuthModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
