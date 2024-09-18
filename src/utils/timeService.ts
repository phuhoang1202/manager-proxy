import dayjs from 'dayjs';

const TimeService = {
    // Lấy thời gian hiện tại theo định dạng DDMMYYYYHHmmss
    getCurrentTimeQR(): string {
        return dayjs().format("DDMMYYYYHHmmss");
    },

    // Chuyển đổi thời gian từ DDMMYYYYHHmmss sang định dạng 2024-09-18T09:08:58
    convertTimeQRToISO(inputString: string): string {
        if (inputString.length !== 14) {
            throw new Error('Chuỗi thời gian không hợp lệ. Phải có đúng 14 ký tự.');
        }

        // Tách chuỗi thành ngày, tháng, năm, giờ, phút, giây
        const day = inputString.slice(0, 2);
        const month = inputString.slice(2, 4);
        const year = inputString.slice(4, 8);
        const hour = inputString.slice(8, 10);
        const minute = inputString.slice(10, 12);
        const second = inputString.slice(12, 14);

        // Tạo chuỗi theo định dạng ISO 8601: YYYY-MM-DDTHH:mm:ss
        return `${year}-${month}-${day}T${hour}:${minute}:${second}`;
    },

    isTimeDifferenceEqual(time1: string, time2: string, diffInMinutes: number = 30): boolean {
        const date1 = dayjs(time1);
        const date2 = dayjs(time2);

        // Tính sự khác biệt theo phút
        const difference = date2.diff(date1, 'minute');

        return difference === diffInMinutes;
    }
}

export default TimeService;
