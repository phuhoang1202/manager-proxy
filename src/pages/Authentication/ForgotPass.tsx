import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError } from 'axios';
import Toast from '../../configs/ToastConfig';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';

// import { resetPassword } from '../../api/authApi';
import { ContactSvg } from '../../constants/svg';

export const forgotPassSchema = z.object({
    email: z.string().email('Vui lòng nhập địa chỉ email hợp lệ'),
});

export type ForgotPassFormFields = z.infer<typeof forgotPassSchema>;

function ForgotPass() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState } = useForm<ForgotPassFormFields>({
        resolver: zodResolver(forgotPassSchema),
    });
    const { errors, isDirty, isValid, isSubmitting } = formState;

    // const onSubmit: SubmitHandler<ForgotPassFormFields> = async (formFields) => {
    //     try {
    //         const result = await resetPassword(formFields.email);
    //         if (result.data.status === 200) {
    //             Toast.success(result.data.message);
    //             navigate('/auth/signin');
    //         } else {
    //             Toast.warn('Không thể gửi yêu cầu khôi phục mật khẩu');
    //         }
    //     } catch (error) {
    //         if (error instanceof AxiosError) {
    //             Toast.error(error.response?.data?.message || 'Lỗi khi gửi yêu cầu');
    //         } else {
    //             Toast.error('Đã xảy ra lỗi không xác định');
    //         }
    //     }
    // };

    return (
        <>
            <Breadcrumb pageName="Khôi phục mật khẩu" />

            <div className="m-auto w-9/12 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="w-full">
                    <div className="w-full border-stroke dark:border-strokedark">
                        <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
                            <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-title-xl2 text-center">
                                Khôi phục mật khẩu
                            </h2>
                            <span className="mb-1.5 block font-medium text-center">
                                Xin Mời Bạn Nhập Email Đã Đăng Ký Để Lấy Lại Mật Khẩu
                            </span>

                            <form
                                className="mt-9"
                                //  onSubmit={handleSubmit(onSubmit)}
                            >
                                <div className="mb-4">
                                    <label className="mb-2.5 block font-medium text-black dark:text-white">
                                        Địa chỉ email
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="email"
                                            type="email"
                                            placeholder="Email"
                                            {...register('email')}
                                            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        />
                                        <span className="absolute right-4 top-4">
                                            <ContactSvg />
                                        </span>
                                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={!isDirty || !isValid || isSubmitting}
                                    className={`w-full rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90 flex items-center justify-center shadow-1x 
                                    ${
                                        !isDirty || !isValid || isSubmitting
                                            ? 'cursor-not-allowed'
                                            : 'cursor-pointer hover:-translate-y-1 hover:shadow-none'
                                    }`}
                                >
                                    {isSubmitting ? (
                                        <div className="w-6 h-6 border-4 border-gray-200 border-t-white animate-spin "></div>
                                    ) : (
                                        'Khôi phục mật khẩu'
                                    )}
                                </button>

                                <div className="mt-6 text-center">
                                    <p>
                                        Quay lại trang{' '}
                                        <Link to="/auth/signin" className="text-primary">
                                            đăng nhập
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
}

export default ForgotPass;
