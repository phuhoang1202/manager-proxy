export const CONSTANT = {
    PATTERN: {
        PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()]).{8,}$/,
        NAME: /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠ-ỹ\s]+$/
    },
    LOCAL_STORAGE_KEY: {
        TOKEN: 'vipproxy-token',
        USER_ID: 'vipproxy-user-id',
        TRANSACTION_INFO: 'transfer-info',
    }
}