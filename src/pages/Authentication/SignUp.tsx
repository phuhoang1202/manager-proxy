import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import LogoDark from '../../images/logo/logo-dark.svg';
import Logo from '../../images/logo/logo.svg';
import Toast from '../../configs/ToastConfig';
import { CONSTANT } from '../../constants/constant';
import { UserSvg, ContactSvg, UnlockSvg, LockSvg, Phone } from '../../constants/svg';
import { CreateUserDto } from '../../types/user';
import { register as registerAccount } from '../../api/authApi';

const Placeholder = {
    name: 'Ví dụ: Nguyễn Văn A',
    username: 'Ví dụ: nguyenvana98',
    email: 'Ví dụ: example@gmail.com',
    phone: 'Ví dụ: 0912345678',
    password: 'Ít nhất 8 ký tự: chữ, số và ký tự đặc biệt',
    confirmPassword: 'Nhập lại mật khẩu của bạn',
};

export const registerSchema = z
    .object({
        name: z
            .string()
            .min(2, 'Họ tên phải có ít nhất 2 ký tự')
            .max(50, 'Họ tên không được vượt quá 50 ký tự')
            .regex(CONSTANT.PATTERN.NAME, 'Họ tên không hợp lệ'),
        username: z
            .string()
            .min(3, 'Tên tài khoản phải có ít nhất 3 ký tự')
            .max(50, 'Tên tài khoản không được vượt quá 50 ký tự')
            .regex(/^[a-zA-Z][a-zA-Z0-9]*$/, 'Tên tài khoản không hợp lệ'),
        email: z.string().email('Định dạng email không hợp lệ'),
        phone: z.string().regex(/^0[13579]\d{8}$/, 'Số điện thoại không hợp lệ'),
        password: z
            .string()
            .min(8, 'Mật khẩu phải có ít nhất 8 ký tự')
            .regex(
                CONSTANT.PATTERN.PASSWORD,
                'Mật khẩu phải chứa ít nhất 1 chữ hoa, 1 chữ thường, 1 số và 1 ký tự đặc biệt từ !@#$%^&*()',
            ),
        confirmPassword: z.string().min(8, 'Xác nhận mật khẩu phải có ít nhất 8 ký tự'),
    })
    .refine((data) => data.password === data.confirmPassword, {
        path: ['confirmPassword'],
        message: 'Mật khẩu không khớp',
    });

export type FormFields = z.infer<typeof registerSchema>;

const SignUp: React.FC = () => {
    const navigate = useNavigate();

    const { register, handleSubmit, formState, reset } = useForm<FormFields>({
        resolver: zodResolver(registerSchema),
        mode: 'all',
    });
    const { errors, isDirty, isValid, isSubmitting } = formState;
    const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

    const onToggleShowPassword = () => {
        setIsShowPassword(!isShowPassword);
    };

    const onSubmit: SubmitHandler<FormFields> = async (formFields: FormFields) => {
        const { confirmPassword, phone, ...data } = formFields;
        const createUserDto: CreateUserDto = { phone_number: phone, ...data };

        try {
            const result = await registerAccount(createUserDto);
            if (result.data.status === 200) {
                Toast.success(result.data.message);
                reset();
                navigate('/auth/signin');
            } else {
                Toast.warn('Đăng ký thất bại');
            }
        } catch (error: any) {
            let errorMessage = '';
            const errors = error?.response?.data?.error?.errors || [];
            if (errors?.length > 0) {
                for (const value of errors) {
                    const path: string = value.path;
                    if (path) {
                        const [filed, constraint] = path.split('_');
                        if (constraint.includes('UNIQUE')) {
                            errorMessage = filed + ' đã tồn tại';
                        }
                    }
                }
            }
            Toast.error(errorMessage);
        }
    };

    return (
        <>
            <Breadcrumb pageName="Đăng ký" />

            <div className="w-9/12 m-auto rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="w-full">
                    <div className="w-full border-stroke dark:border-strokedark">
                        <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
                            <h2 className="mb-3 text-center text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
                                Đăng ký tài khoản
                            </h2>
                            <span className="mb-9 block font-medium text-center">
                                Email dùng để lấy lại mật khẩu, nhận thông báo mua hàng/thông báo hết hạn... Vì vậy vui
                                lòng điền đúng email đang sử dụng.
                            </span>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-4">
                                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                                        Họ và tên
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="name"
                                            type="text"
                                            placeholder={Placeholder.name}
                                            {...register('name')}
                                            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                        <span className="absolute right-4 top-4">
                                            <UserSvg />
                                        </span>
                                        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                                        Tên tài khoản
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="username"
                                            type="text"
                                            placeholder={Placeholder.username}
                                            {...register('username')}
                                            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                        <span className="absolute right-4 top-4">
                                            <UserSvg />
                                        </span>
                                        {errors.username && <p className="text-red-500">{errors.username.message}</p>}
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="mb-2.5 block font-medium text-black dark:text-white">Email</label>
                                    <div className="relative">
                                        <input
                                            id="email"
                                            type="email"
                                            placeholder={Placeholder.email}
                                            {...register('email')}
                                            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                        <span className="absolute right-4 top-4">
                                            <ContactSvg />
                                        </span>
                                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                                        Số điện thoại
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="phone"
                                            type="phone"
                                            placeholder={Placeholder.phone}
                                            {...register('phone')}
                                            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                        <span className="absolute right-4 top-4">
                                            <Phone />
                                        </span>
                                        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                                        Mật khẩu
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="password"
                                            type={isShowPassword ? 'text' : 'password'}
                                            placeholder={Placeholder.password}
                                            {...register('password')}
                                            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                        <span
                                            className="absolute right-4 top-4 cursor-pointer"
                                            onClick={onToggleShowPassword}
                                        >
                                            {isShowPassword ? <UnlockSvg /> : <LockSvg />}
                                        </span>
                                        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                                        Nhập lại mật khẩu
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="confirmPassword"
                                            type={isShowPassword ? 'text' : 'password'}
                                            placeholder={Placeholder.confirmPassword}
                                            {...register('confirmPassword')}
                                            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                        <span
                                            className="absolute right-4 top-4 cursor-pointer"
                                            onClick={onToggleShowPassword}
                                        >
                                            {isShowPassword ? <UnlockSvg /> : <LockSvg />}
                                        </span>
                                        {errors.confirmPassword && (
                                            <p className="text-red-500">{errors.confirmPassword.message}</p>
                                        )}
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={!isDirty || !isValid || isSubmitting}
                                    className={`w-full rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90 flex items-center justify-center
                                        ${
                                            !isDirty || !isValid || isSubmitting
                                                ? 'cursor-not-allowed'
                                                : 'cursor-pointer hover:-translate-y-1 hover:shadow-none'
                                        }`}
                                >
                                    {isSubmitting ? (
                                        <div className="w-6 h-6 border-4 border-gray-200 border-t-white animate-spin"></div>
                                    ) : (
                                        'Đăng ký'
                                    )}
                                </button>

                                <div className="mt-6 text-center">
                                    <p>
                                        Đã có tài khoản?{' '}
                                        <Link to="/auth/signin" className="text-primary">
                                            Đăng nhập
                                        </Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;
