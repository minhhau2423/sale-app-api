import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../common/dto/user.dto';
import { User as UserEntity } from './user.entity';
import { RegisterInput } from 'src/common/dto/register.input.dto.';
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

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async createUser(registerInput: RegisterInput): Promise<User> {
    const { phoneNumber, password } = registerInput;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User();
    user.name = "Customer"
    user.phoneNumber = phoneNumber;
    user.password = hashedPassword;

    return this.usersRepository.save(user);
  }
}