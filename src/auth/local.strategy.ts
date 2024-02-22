import { Injectable, Logger } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    private readonly logger = new Logger(LocalStrategy.name);
    
    constructor(private readonly userRepository) {
        super();
    }
    public async validate(username: string, password: string) {
        return { username, password };
    }
}