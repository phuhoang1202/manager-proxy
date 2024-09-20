import React, { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeadCell,
    TableRow,
    Button,
    FloatingLabel,
    Modal,
} from 'flowbite-react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

// Định nghĩa kiểu dữ liệu cho người dùng
interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone_number: string;
    status: number;
    role: string;
}

export function ManagementPost(): JSX.Element {
    // Dữ liệu cố định cho danh sách người dùng
    const initialUsers: User[] = [
        {
            id: 1,
            name: 'John Doe',
            username: 'ttt',
            email: 'john@example.com',
            phone_number: '000000',
            role: 'admin',
            status: 1,
        },
        {
            id: 2,
            name: 'Jane Smith',
            username: 'tttd',
            email: 'jane@example.com',
            phone_number: '000001110',
            role: 'user',
            status: 0,
        },
        {
            id: 3,
            name: 'Michael Johnson',
            username: 'ttft',
            email: 'michael@example.com',
            phone_number: '004440000',
            role: 'user',
            status: 0,
        },
        {
            id: 4,
            name: 'Emily Davis',
            username: 'ttft',
            email: 'emily@example.com',
            phone_number: '000066600',
            role: 'user',
            status: 1,
        },
    ];

    // Quản lý state với kiểu dữ liệu rõ ràng
    const [users, setUsers] = useState<User[]>(initialUsers);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage: number = 2;
    const [openModal, setOpenModal] = useState(false);
    const [userToDelete, setUserToDelete] = useState<User | null>(null); // Theo dõi người dùng sẽ xóa

    // Tính tổng số trang
    const totalPages = Math.ceil(users.length / itemsPerPage);

    // State cho tìm kiếm
    const [searchName, setSearchName] = useState<string>('');
    const [searchEmail, setSearchEmail] = useState<string>('');
    const [searchPhoneNumber, setSearchPhoneNumber] = useState<string>('');
    const [searchStatus, setSearchStatus] = useState<string>('');

    // Lọc người dùng theo từ khóa tìm kiếm
    const filteredUsers = users.filter((user) => {
        const matchesName = user.name.toLowerCase().includes(searchName.toLowerCase());
        const matchesEmail = user.email.toLowerCase().includes(searchEmail.toLowerCase());
        const matchesPhoneNumber = user.phone_number.includes(searchPhoneNumber);
        const matchesStatus =
            searchStatus === '' ||
            (searchStatus === 'active' && user.status === 1) ||
            (searchStatus === 'inactive' && user.status === 0);

        return matchesName && matchesEmail && matchesPhoneNumber && matchesStatus;
    });

    // Tính toán người dùng hiển thị cho trang hiện tại
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedUsers = filteredUsers.slice(startIndex, startIndex + itemsPerPage);

    const handleOpenModal = (user: User): void => {
        setUserToDelete(user);
        setOpenModal(true);
    };

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

    const handleConfirmDelete = (): void => {
        if (userToDelete) {
            const updatedUsers = users.filter((user) => user.id !== userToDelete.id);
            setUsers(updatedUsers);
            setUserToDelete(null); // Xóa người dùng sau khi đã xác nhận
        }
        setOpenModal(false); // Đóng modal
    };

    return (
        <>
            <section className="t-homepage-ssTwo mb-10">
                <div className="text-center">
                    <h2 className="text-title-xl2 mb-2 font-semibold">Quản lý người dùng</h2>
                </div>
            </section>

            {/* Thanh tìm kiếm */}
            <div className="grid grid-cols-4 gap-4 mb-10">
                <input
                    type="text"
                    className="border rounded p-2 dark:bg-transparent"
                    placeholder="Tên"
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
                />
                <input
                    type="text"
                    className="border rounded p-2 dark:bg-transparent"
                    placeholder="Email"
                    value={searchEmail}
                    onChange={(e) => setSearchEmail(e.target.value)}
                />
                <input
                    type="text"
                    className="border rounded p-2 dark:bg-transparent"
                    placeholder="Số điện thoại"
                    value={searchPhoneNumber}
                    onChange={(e) => setSearchPhoneNumber(e.target.value)}
                />
                <select
                    className="border rounded p-2 dark:bg-transparent"
                    value={searchStatus}
                    onChange={(e) => setSearchStatus(e.target.value)}
                >
                    <option value="" className="dark:bg-transparent">
                        Trạng thái
                    </option>
                    <option value="active" className="dark:bg-transparent">
                        Hoạt động
                    </option>
                    <option value="inactive" className="dark:bg-transparent">
                        Dừng hoạt động
                    </option>
                </select>
            </div>

            <div className="overflow-x-auto t-disabled border-inherit rounded border ">
                <Table>
                    <TableHead className="border border-t-0 border-l-0 border-r-0 border-b-1">
                        <TableHeadCell className="border-r">Id</TableHeadCell>
                        <TableHeadCell className="border-r">Tên</TableHeadCell>
                        <TableHeadCell className="border-r">Tài khoản</TableHeadCell>
                        <TableHeadCell className="border-r">Email</TableHeadCell>
                        <TableHeadCell className="border-r">Số điện thoại</TableHeadCell>
                        <TableHeadCell className="border-r">Trạng thái</TableHeadCell>
                        <TableHeadCell className="border-r">Vai trò</TableHeadCell>
                        <TableHeadCell className="border-r">Hành động</TableHeadCell>
                    </TableHead>
                    <TableBody className="divide-y">
                        {paginatedUsers.map((user) => (
                            <TableRow key={user.id} className="dark:border-gray-700 dark:bg-gray-800">
                                <TableCell className="border-r whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {user.id}
                                </TableCell>
                                <TableCell className="border-r whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {user.name}
                                </TableCell>
                                <TableCell className="border-r whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {user.username}
                                </TableCell>
                                <TableCell className="border-r">{user.email}</TableCell>
                                <TableCell className="border-r">{user.phone_number}</TableCell>
                                {user.status === 1 ? (
                                    <TableCell className="border-r">
                                        <Button className="bg-success" color="success">
                                            Hoạt động
                                        </Button>
                                    </TableCell>
                                ) : (
                                    <TableCell className="border-r">
                                        <Button className="bg-danger" color="failure">
                                            Dừng hoạt động
                                        </Button>
                                    </TableCell>
                                )}
                                <TableCell className="border-r">{user.role}</TableCell>
                                <TableCell>
                                    <Button
                                        className="text-red-500 bg-transparent dark:bg-transparent focus:ring-transparent dark:focus:ring-transparent"
                                        style={{ backgroundColor: 'transparent' }}
                                        disabled={user.role === 'admin'}
                                        onClick={() => handleOpenModal(user)}
                                    >
                                        Xóa
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <div className="flex justify-evenly items-center mt-4 pb-4">
                <Button
                    className="text-black dark:text-white dark:border-white  border border-black focus:ring-transparent"
                    style={{ backgroundColor: 'transparent' }}
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                >
                    Trang trước
                </Button>

                <span className="text-black dark:text-white">
                    Trang {currentPage} / {totalPages}
                </span>

                <Button
                    className="text-black dark:text-white dark:border-white  dark:focus:ring-transparent focus:ring-transparent border border-black "
                    style={{ backgroundColor: 'transparent' }}
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                >
                    Trang sau
                </Button>
            </div>

            <Modal show={openModal} onClose={() => setOpenModal(false)} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Bạn có chắc chắn muốn xóa người dùng {userToDelete?.name}
                        </h3>
                        <div className="flex justify-center gap-4">
                            <Button color="failure" onClick={handleConfirmDelete}>
                                Đồng ý
                            </Button>
                            <Button color="gray" onClick={() => setOpenModal(false)}>
                                Không
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
