import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from '../../common/dto/user.dto';
import { RegisterInput } from 'src/common/dto/register.input.dto.';

@Resolver()
export class UserResolver {
    constructor(private readonly userService: UserService) { }
    @Query(() => [User])
    async getAllUsers(): Promise<User[]> {
        return await this.userService.findAll();
    }

    @Mutation(() => User)
    async register(
        @Args('registerInput')
        registerInput: RegisterInput
    ): Promise<User> {
        const user = await this.userService.createUser(registerInput);
        return user;
    }
}
