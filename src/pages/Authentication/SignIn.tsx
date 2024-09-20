import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDispatch } from 'react-redux';
import { Checkbox, Label } from 'flowbite-react';

import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import LogoDark from '../../images/logo/logo-dark.svg';
import Logo from '../../images/logo/logo.svg';
import Toast from '../../configs/ToastConfig';
import { AppDispatch } from '../../redux/store';
import { setUser } from '../../redux/features/userSlice';
import { login, getUserDetail } from '../../api/authApi';
import { ContactSvg, LockSvg, UnlockSvg } from '../../constants/svg';
import { LoginResponse, UserDetail, UserSlice } from '../../types/user';
import { LocalStorageService } from '../../utils/localStorageService';
import { AxiosError } from 'axios';

export const userSchema = z.object({
    username: z.string(),
    password: z.string(),
});

export type FormFields = z.infer<typeof userSchema>;

const SignIn: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const { register, handleSubmit, formState } = useForm<FormFields>({
        resolver: zodResolver(userSchema),
    });
    const { errors, isDirty, isValid, isSubmitting } = formState;
    const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

    const onToggleShowPassword = () => {
        setIsShowPassword(!isShowPassword);
    };

    const onSubmit: SubmitHandler<FormFields> = async (formFields: FormFields) => {
        try {
            const result = await login(formFields);
            if (result.data.status === 200) {
                const { user_id, token } = result.data.data as LoginResponse;
                LocalStorageService.saveLoginInfo(user_id, token);

                const userDetailResult = await getUserDetail(user_id);
                if (userDetailResult.data.status === 200) {
                    const userDetail: UserDetail = userDetailResult.data.data as UserDetail;
                    const { id, ...data } = userDetail;
                    const user = { user_id, token, ...data } as UserSlice;
                    dispatch(setUser(user));
                    Toast.success(result.data.message);
                    navigate('/');
                } else {
                    Toast.warn('Không lấy được thông tin người dùng');
                }
            } else {
                Toast.warn('Đăng nhập thất bại');
            }
        } catch (error) {
            if (error instanceof AxiosError) {
                console.log(error);
                Toast.error(error.response?.data?.message || 'Thông tin đăng nhập sai');
            } else {
                console.log(error);
                Toast.error('Đã xảy ra lỗi không xác định');
            }
        }
    };

    return (
        <>
            <Breadcrumb pageName="Đăng nhập" />

            <div className="m-auto w-9/12 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="w-full">
                    <div className="w-full border-stroke dark:border-strokedark">
                        <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
                            <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-title-xl2 text-center">
                                Đăng nhập tài khoản
                            </h2>
                            <span className="mb-1.5 block font-medium text-center">Xin mời bạn nhập thông tin</span>

                            <form className="mt-9" onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-4">
                                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                                        Tên tài khoản
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="username"
                                            type="username"
                                            placeholder="Ví dụ: nguyenvana98"
                                            {...register('username')}
                                            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />

                                        <span className="absolute right-4 top-4">
                                            <ContactSvg />
                                        </span>

                                        {errors.username && <p className="text-red-500">{errors.username.message}</p>}
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <div className="flex justify-between ">
                                        <label className="mb-2.5 block font-medium text-black dark:text-white">
                                            Mật khẩu
                                        </label>
                                        <Link to="/auth/forgotpass">
                                            <label className="cursor-pointer hover:underline mb-2.5 block font-thin text-forgotPass dark:text-white">
                                                Quên mật khẩu ?
                                            </label>
                                        </Link>
                                    </div>

                                    <div className="relative">
                                        <input
                                            id="password"
                                            placeholder="Mật khẩu"
                                            type={isShowPassword ? 'text' : 'password'}
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

                                <div className="mb-6" id="checkbox">
                                    <div className="flex items-center gap-2">
                                        <Checkbox id="accept" defaultChecked className="bg-borderColorGray" />
                                        <Label htmlFor="accept" className=" select-none">
                                            Ghi nhớ mật khẩu
                                        </Label>
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
                                        'Đăng nhập'
                                    )}
                                </button>

                                <div className="mt-6 text-center">
                                    <p>
                                        Chưa có tài khoản?{' '}
                                        <Link to="/auth/signup" className="text-primary">
                                            Đăng ký
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

export default SignIn;
