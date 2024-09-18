export type CreateUserDto = {
    name: string;
    username: string;
    email: string;
    phone_number: string;
    password: string;
}

export type LoginDto = Pick<CreateUserDto, 'username' | 'password'>;

export type LoginResponse = {
    user_id: number;
    token: string;
}

export type UserDetail = {
    total_count: number;
    id: number;
    username: string;
    name: string;
    email: string;
    phone_number: string;
    password: string;
    active: number;
    createdAt: string;
    updatedAt: string;
}

export type UserSlice = Omit<LoginResponse & UserDetail, 'id' | 'password'>;