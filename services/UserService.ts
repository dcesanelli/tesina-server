import bcrypt from 'bcrypt';
import { Role, User } from "@prisma/client";
import { newUserDto, UserDto } from "../models/dto/UserDto";
import PrismaService from './PrismaService';

class UserService {
    getUsers = async (): Promise<UserDto[]> => {
        const users = await PrismaService.user.findMany();
        const usersDto = users.map((user: User) => {
            return newUserDto(user);
        });
        return usersDto;
    };

    createUser = async (email: string, password: string, firstname: string, lastname: string, dob: string, role: Role): Promise<UserDto> => {
        const newUser = await PrismaService.user.create({
            data: {
                email,
                password: await bcrypt.hash(password, 10),
                firstname,
                lastname,
                dob: new Date(dob),
                verified: false
            }
        });

        return newUserDto(newUser);
    };

    deleteUser = async (id: string) => {
        const user = await PrismaService.user.delete({ where: { id } });
        return newUserDto(user);
    };

    login = async (email: string, password: string): Promise<UserDto | undefined> => {
        const user = await PrismaService.user.findUnique({
            where: {
                email: email
            }
        });

        if (user && bcrypt.compare(password, user.password)) {
            return newUserDto(user);
        }
        return undefined;
    };
}
export default new UserService();