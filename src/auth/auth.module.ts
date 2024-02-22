import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { PrismaService } from "src/prisma.service";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { JwtStrategy } from "./jwt.strategy";

export const jwtSecret = 'zjP9h6ZI5LoSKCRj';

@Module({
    imports: [
        PassportModule,
        JwtModule.register({
        secret: jwtSecret,
        signOptions: { expiresIn: '5m' }, // e.g. 30s, 7d, 24h
    }),
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy, PrismaService],
})
export class AuthModule {}