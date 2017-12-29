import axios from 'axios'

const instance = axios.create({
    baseURL: '',
    timeout: 3000,
    headers: {
        'X-Requested-With': 'XMLHttpRequest'
    },
});

instance.interceptors.response.use(res => {
    if (res.status === 200 && res.data.err_code === 0) {
        return res.data;
    }

    return Promise.reject(res.data);
}, err => {

    let errorMessage = {
        err_code: err.status,
        err_msg: '服务器错误'
    }
    return Promise.reject(errorMessage);
})

export default instance;