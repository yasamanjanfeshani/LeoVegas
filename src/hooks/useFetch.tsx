import { useState, useEffect } from 'react';
import axiosHelper from '../helper/axiosHelper';

const useFetchData = (url: string) => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [loadMore, setLoadMore] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const fetchData = async () => {
        try {
            const response = await axiosHelper.get(url);
            setData(response);
            setLoading(false);
            setLoadMore(false)
        } catch (error: unknown) {
            if (error instanceof Error) {
                setError(error.message);
                setLoading(false);
                setLoadMore(false)
            }
        }
    };


    useEffect(() => {
        setLoadMore(true)
        fetchData();
    }, [url]);

    return { data, loading, error, fetchData, loadMore };
};

export default useFetchData;