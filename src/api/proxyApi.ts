import axios from "axios"

// label đặt bằng email người ta cho dễ phân biệt nên truyền vào
export const createSubUser = (label: string) => {

    // em để tạm đây cho đúng thông tin, được thì đưa vào .env sau
    const token = `Token 5wna7ryadi4teyhypczitt3aezf8of1eyv5un5is`;
    return axios.post(`https://proxy.webshare.io/api/v2/subuser`,
        {
            label: label,
            proxy_limit: 10,
            max_thread_count: 500
        },
        {
            headers: {
                Authorization: token,
                "Content-Type": "application/json"
            }
        })
}