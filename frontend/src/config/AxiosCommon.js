import axios from 'axios';

const axiosCommon = () => {
    axios.defaults.baseURL = 'http://localhost:8081/';

    //Add a request interceptor
    axios.interceptors.request.use(
        function(config) {
            //Do something before request is sent
            return config;
        }, function(error) {
            return Promise.reject(error);
        }
    );
}

export default axiosCommon;