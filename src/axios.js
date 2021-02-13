import axios from 'axios'

const axiosInstance = axios.create({
    baseURL : 'https://todo-in-react-default-rtdb.firebaseio.com/'
});

export default axiosInstance;

