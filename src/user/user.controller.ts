import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { UserRequestId } from './interfaces/user-request-id.interface';
import { User } from './interfaces/user.interface';

type UserList = { users: User[] };

@Controller('user')
export class UserController {
  private users: User[] = [
    {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      password: '',
      isActive: true,
    },
    {
      id: '2',
      firstName: 'Jane',
      lastName: 'Dane',
      password: '',
      isActive: true,
    },
  ];

  @GrpcMethod('UserService')
  GetAll(): UserList {
    return { users: this.users.filter((user) => user.isActive) };
  }

  @GrpcMethod('UserService')
  Get(data: UserRequestId): User {
    return this.users.find(({ id }) => id === data.id);
  }

  @GrpcMethod('UserService')
  Insert(data: User): User {
    this.users = [...this.users, data];
    return data;
  }

  @GrpcMethod('UserService')
  Update(data: User): User {
    this.users = this.users.map((u) => (u.id === data.id ? { ...data } : u));
    return data;
  }

  @GrpcMethod('UserService')
  Remove(data: UserRequestId) {
    this.users = this.users.filter(({ id }) => id !== data.id);
  }
}
