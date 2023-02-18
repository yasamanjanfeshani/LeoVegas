import { useEffect, useState } from 'react';

type SearchFunction = (query: string) => void;

function useDebounce(searchFunction: SearchFunction, delay: number): [string, (query: string) => void] {
    const [query, setQuery] = useState('');

    useEffect(() => {
        const handler = setTimeout(() => {
            searchFunction(query);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [query, delay]);

    const debouncedQuery = query;
    const debouncedSetQuery = (newQuery: string) => {
        setQuery(newQuery);
    };

    return [debouncedQuery, debouncedSetQuery];
}

export default useDebounce;