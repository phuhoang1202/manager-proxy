import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow, Button } from 'flowbite-react';

// Định nghĩa kiểu dữ liệu cho người dùng
interface User {
    id: number;
    name: string;
    email: string;
    status: number;
}

export function ManagementPost(): JSX.Element {
    // Dữ liệu cố định cho danh sách người dùng
    const initialUsers: User[] = [
        { id: 1, name: 'John Doe', email: 'john@example.com', status: 1 },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 0 },
        { id: 3, name: 'Michael Johnson', email: 'michael@example.com', status: 0 },
        { id: 4, name: 'Emily Davis', email: 'emily@example.com', status: 1 },
    ];

    // Quản lý state với kiểu dữ liệu rõ ràng
    const [users, setUsers] = useState<User[]>(initialUsers);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage: number = 2;

    // Tính tổng số trang
    const totalPages = Math.ceil(users.length / itemsPerPage);

    // Xử lý xóa người dùng
    const handleDelete = (id: number): void => {
        // Chỉ giữ lại những người dùng không có ID trùng với ID được xóa
        const updatedUsers = users.filter((user) => user.id !== id);
        setUsers(updatedUsers);
    };

    // Tính toán người dùng hiển thị cho trang hiện tại
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedUsers = users.slice(startIndex, startIndex + itemsPerPage);

    // Xử lý chuyển trang
    const handleNextPage = (): void => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = (): void => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <>
            <section className="t-homepage-ssTwo mb-10">
                <div className="text-center">
                    <h2 className="text-title-xl2 mb-2 font-semibold">Quản lý bài viết</h2>
                </div>
            </section>
            <div className="overflow-x-auto t-disabled border-inherit rounded border ">
                <Table>
                    <TableHead className="border  border-t-0 border-l-0 border-r-0 border-b-1">
                        <TableHeadCell>Id</TableHeadCell>
                        <TableHeadCell>Tên</TableHeadCell>
                        <TableHeadCell>Email</TableHeadCell>
                        <TableHeadCell>Trạng thái</TableHeadCell>
                        <TableHeadCell>Hành động</TableHeadCell>
                    </TableHead>
                    <TableBody className="divide-y">
                        {paginatedUsers.map((user) => (
                            <TableRow key={user.id} className="dark:border-gray-700 dark:bg-gray-800">
                                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {user.id}
                                </TableCell>
                                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {user.name}
                                </TableCell>
                                <TableCell>{user.email}</TableCell>
                                {user.status === 1 ? (
                                    <TableCell>
                                        <Button className="bg-success" color="success">
                                            Hoạt động
                                        </Button>
                                    </TableCell>
                                ) : (
                                    <TableCell>
                                        <Button className="bg-danger" color="failure">
                                            Dừng hoạt động
                                        </Button>
                                    </TableCell>
                                )}
                                <TableCell>
                                    <Button className="text-red-500" onClick={() => handleDelete(user.id)}>
                                        Xóa
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                {/* Phân trang */}
                <div className="flex justify-evenly items-center mt-4 pb-4 border-t-1 border pt-4 border-l-0 border-r-0 border-b-0">
                    <Button
                        className="text-black dark:text-white"
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                    >
                        Trang trước
                    </Button>

                    {/* Hiển thị số trang hiện tại trên tổng số trang */}
                    <span className="text-black dark:text-white">
                        Trang {currentPage} / {totalPages}
                    </span>

                    <Button
                        className="text-black dark:text-white"
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                    >
                        Trang sau
                    </Button>
                </div>
            </div>
        </>
    );
}
