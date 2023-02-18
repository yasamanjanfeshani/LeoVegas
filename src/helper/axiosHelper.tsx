import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

interface AxiosHelper {
    get: <T = any>(url: string, config?: AxiosRequestConfig) => Promise<T>;
    post: <T = any>(
        url: string,
        data?: any,
        config?: AxiosRequestConfig
    ) => Promise<T>;
}

const createAxiosHelper = (token: string): AxiosHelper => {
    const axiosInstance: AxiosInstance = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    const get = async <T = any>(url: string, config?: AxiosRequestConfig) => {
        const response = await axiosInstance.get<T>(url, config);
        return response.data;
    };

    const post = async <T = any>(
        url: string,
        data?: any,
        config?: AxiosRequestConfig
    ) => {
        const response = await axiosInstance.post<T>(url, data, config);
        return response.data;
    };

    return { get, post };
};



const axiosHelper = createAxiosHelper('eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDNlOTQzZGY2MzQ5YWJiNzIyMzg3ZGIwZTA0ZDgzNiIsInN1YiI6IjYzZWU0MzhhMWI3Mjk0MDA3YzRhZGU1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kkkhJm-T7TkuPr4oDPoAeGdyJdcKOKoZLgJ_U-797iE');

export default axiosHelper