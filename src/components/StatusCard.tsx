import React from 'react';
import { Card } from 'flowbite-react';

function StatusCard() {
    return (
        <>
            <Card
                className="max-w-sm dark:bg-transparent"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="data:image/jpeg;base64,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"
            >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Chính sách hoàn tiền
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">Khi bạn mua thành công</p>
                <div className="flex justify-between">
                    <span className="flex">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6 mr-2"
                            width="24"
                            height="24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 2.25v1.5M15.75 2.25v1.5M3 9.75h18M4.5 6.75h15a1.5 1.5 0 011.5 1.5v10.5a1.5 1.5 0 01-1.5 1.5h-15a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5z"
                            />
                        </svg>
                        2023-17-2
                    </span>
                    <span className="flex">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6 mr-2"
                            width="24"
                            height="24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 6v6h4.5M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12 6.615 21.75 12 21.75z"
                            />
                        </svg>
                        22:56
                    </span>
                </div>
            </Card>
            <Card
                className="max-w-sm dark:bg-transparent"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="data:image/jpeg;base64,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"
            >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Chính sách hoàn tiền
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">Khi bạn mua thành công</p>
                <div className="flex justify-between">
                    <span className="flex">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6 mr-2"
                            width="24"
                            height="24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 2.25v1.5M15.75 2.25v1.5M3 9.75h18M4.5 6.75h15a1.5 1.5 0 011.5 1.5v10.5a1.5 1.5 0 01-1.5 1.5h-15a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5z"
                            />
                        </svg>
                        2023-17-2
                    </span>
                    <span className="flex">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6 mr-2"
                            width="24"
                            height="24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 6v6h4.5M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12 6.615 21.75 12 21.75z"
                            />
                        </svg>
                        22:56
                    </span>
                </div>
            </Card>
            <Card
                className="max-w-sm dark:bg-transparent"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="data:image/jpeg;base64,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"
            >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Chính sách hoàn tiền
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">Khi bạn mua thành công</p>
                <div className="flex justify-between">
                    <span className="flex">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6 mr-2"
                            width="24"
                            height="24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 2.25v1.5M15.75 2.25v1.5M3 9.75h18M4.5 6.75h15a1.5 1.5 0 011.5 1.5v10.5a1.5 1.5 0 01-1.5 1.5h-15a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5z"
                            />
                        </svg>
                        2023-17-2
                    </span>
                    <span className="flex">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6 mr-2"
                            width="24"
                            height="24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 6v6h4.5M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12 6.615 21.75 12 21.75z"
                            />
                        </svg>
                        22:56
                    </span>
                </div>
            </Card>
            <Card
                className="max-w-sm dark:bg-transparent"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="data:image/jpeg;base64,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"
            >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Chính sách hoàn tiền
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">Khi bạn mua thành công</p>
                <div className="flex justify-between">
                    <span className="flex">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6 mr-2"
                            width="24"
                            height="24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 2.25v1.5M15.75 2.25v1.5M3 9.75h18M4.5 6.75h15a1.5 1.5 0 011.5 1.5v10.5a1.5 1.5 0 01-1.5 1.5h-15a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5z"
                            />
                        </svg>
                        2023-17-2
                    </span>
                    <span className="flex">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6 mr-2"
                            width="24"
                            height="24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 6v6h4.5M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12 6.615 21.75 12 21.75z"
                            />
                        </svg>
                        22:56
                    </span>
                </div>
            </Card>
            <Card
                className="max-w-sm dark:bg-transparent"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="data:image/jpeg;base64,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"
            >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Chính sách hoàn tiền
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">Khi bạn mua thành công</p>
                <div className="flex justify-between">
                    <span className="flex">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6 mr-2"
                            width="24"
                            height="24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8.25 2.25v1.5M15.75 2.25v1.5M3 9.75h18M4.5 6.75h15a1.5 1.5 0 011.5 1.5v10.5a1.5 1.5 0 01-1.5 1.5h-15a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5z"
                            />
                        </svg>
                        2023-17-2
                    </span>
                    <span className="flex">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6 mr-2"
                            width="24"
                            height="24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 6v6h4.5M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12 6.615 21.75 12 21.75z"
                            />
                        </svg>
                        22:56
                    </span>
                </div>
            </Card>
        </>
    );
}

export default StatusCard;
