import Axios from 'axios';

Axios.defaults.baseURL = "https://www.test.halobolo.com/";

Axios.interceptors.request.use(
    function(config) {
        // Do something before request is sent
        const userToken = localStorage.getItem('userToken');
        config.headers.common['Access-Control-Allow-Origin'] = '*'; 
        config.headers.common['Accept'] = 'application/json';
        config.headers.common['Authorization'] = userToken;
        config.headers.common['Content-Type'] = "multipart/form-data";
        return config;
    },
    function(error) {
        // Do something with request error
        return Promise.reject(error);
    },
);

Axios.interceptors.response.use((response) => {
    return response;
    },
    function (error) {
        if (error.response.status === 401) {
            localStorage.removeItem('isLoggedIn')
            localStorage.removeItem('userToken')
            localStorage.removeItem('userType')
            window.location.reload();
        }  
    return Promise.reject(error)
})