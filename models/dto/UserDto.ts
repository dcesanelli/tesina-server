import { User } from "@prisma/client";

export type UserDto = {
    id: string,
    email: string,
    firstname: string,
    lastname: string,
    dob: string,
    token: string,
};

export const newUserDto = (user: User): UserDto => {
    return {
        id: user.id,
        email: user.email,
        firstname: user.email,
        lastname: user.lastname,
        dob: user.dob.toISOString(),
        token: ''
    };
};