import { Resolver, Query } from '@nestjs/graphql';
import { User } from './entities/user.entity';

@Resolver()
export class UserResolver {
    @Query(() => String)
    async hello(): Promise<string> {
        return 'Hello world';
    }
}
