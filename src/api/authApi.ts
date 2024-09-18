import { CreateUserDto, LoginDto } from "../types/user"
import axiosClient from "./axiosClient"

export const register = (data: CreateUserDto) => {
    return axiosClient.post('/api/register', data);
}

export const login = (data: LoginDto) => {
    return axiosClient.post('/api/login', data);
}

export const getUserDetail = (userId: number) => {
    return axiosClient.get(`/api/users/${userId}`);
}
