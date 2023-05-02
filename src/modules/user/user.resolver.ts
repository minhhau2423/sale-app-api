import { Resolver, Query } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from '../../common/dto/user.dto';

@Resolver()
export class UserResolver {
    constructor(private readonly userService: UserService) {}
    @Query(() => String)
    async hello(): Promise<string> {
        return 'Hello world';
    }
    @Query(() => [User])
    async getAllUsers(): Promise<User[]>  {
        return await this.userService.findAll();
    }

}
