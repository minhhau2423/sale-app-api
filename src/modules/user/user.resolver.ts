import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from '../../common/dto/user.dto';
import { UserInput } from 'src/common/dto/user.input.dto';

@Resolver()
export class UserResolver {
    constructor(private readonly userService: UserService) { }
    @Query(() => [User])
    async getAllUsers(): Promise<User[]> {
        return await this.userService.findAll();
    }

    @Mutation(() => User)
    async register(
        @Args('userInput')
        userInput: UserInput
    ): Promise<User> {
        const user = await this.userService.createUser(userInput);
        return user;
    }

    @Query(() => User)
    async getUserByNumPhone(@Args('phoneNumber') phoneNumber: string): Promise<User | null> {
        return await this.userService.findByphoneNumber(phoneNumber);
    }

    @Mutation(() => User)
    async logginInfo(@Args('userInput') userInput: UserInput): Promise<User | null> {
        const user = await this.userService.userLogin(userInput);
        return user;
    }
}
