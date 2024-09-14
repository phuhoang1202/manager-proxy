// để tạm type, sau này dựa vào api và định nghĩa lại
export type User = {
    id: number;
    email: string;
    username: string;
    subUser: string;
    status: boolean;
    fullname?: string;
    image?: string;
};
