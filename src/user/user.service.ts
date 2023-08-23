import { Injectable } from '@nestjs/common';
import { UserRequestDTO } from './dto/UserRequestDTO.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  getUsers(): Promise<Users[]> {
    return this.usersRepository.find();
    // return [
    //   {
    //     name: 'Anthony Joboy',
    //     email: 'anthonyjoboy2016@gmail.com',
    //   },
    //   {
    //     name: 'Felix James',
    //     email: 'felix.james@gmail.com',
    //   },
    //   {
    //     name: 'Cindy Krasinski',
    //     email: 'cind45@yahoo.co.uk',
    //   },
    // ];
  }

  create(body: UserRequestDTO): object {
    return this.usersRepository.save(body);
  }

  show(id: number): object {
    return this.usersRepository.findOne({
      where: { id },
    });
  }

  update(body: UserRequestDTO, id: number): object {
    return this.usersRepository.update(id, body);
  }

  delete(id: number) {
    return this.usersRepository.delete(id);
  }

  findByEmail(email: string): object {
    return this.usersRepository.findOne({
      where: { email },
    });
  }
}
