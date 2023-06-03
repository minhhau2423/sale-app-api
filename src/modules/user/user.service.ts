import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../common/dto/user.dto';
import { User as UserEntity } from './user.entity';
import { UserInput } from 'src/common/dto/user.input.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) { }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User | null> {
    return this.usersRepository.findOneBy({ id });
  }

  findByphoneNumber(phoneNumber: string): Promise<User | null> {
    return this.usersRepository.findOne({
      where: {
        phoneNumber: phoneNumber
      }
    });
  }

  async userLogin(userInput: UserInput): Promise<User | null> {
    const phoneNumber = userInput.phoneNumber;
    const user = await this.usersRepository.findOneBy({ phoneNumber });
    const res = await bcrypt.compare(userInput.password, user.password);
    if (res) {
      return user;
    } else {
      return null
    }
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async createUser(userInput: UserInput): Promise<User> {
    const { phoneNumber, password } = userInput;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User();
    user.name = "Khách hàng mới"
    user.phoneNumber = phoneNumber;
    user.password = hashedPassword;

    return this.usersRepository.save(user);
  }
}