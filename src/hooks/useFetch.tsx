import { useState, useEffect } from 'react';
import axiosHelper from '../helper/axiosHelper';

const useFetchData = (url: string) => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    const fetchData = async () => {
        try {
            const response = await axiosHelper.get(url);
            setData(response);
            setLoading(false);
        } catch (error: unknown) {
            if (error instanceof Error) {
                setError(error.message);
                setLoading(false);
            }
        }
    };


    useEffect(() => {
        fetchData();
    }, [url]);

    return { data, loading, error, fetchData };
};

export default useFetchData;