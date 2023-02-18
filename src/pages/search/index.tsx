import ListMovies from "../../components/listMovies"
import useFetchData from "../../hooks/useFetch"
import { SearchMovie } from "../../api"
import { useParams } from 'react-router-dom';
import VerticalList from "../../components/verticallist";
import { useEffect, useState } from "react";
import { IMovie } from "../../interface";

const Search = () => {
    const [page, setPage] = useState(1)
    const [searchData, setSearchData] = useState<IMovie[]>([])
    const { query } = useParams<{ query: string }>();
    const { data, loading, error } = useFetchData(SearchMovie(query, page))

    useEffect(() => {
        if (data && data.results) {
            setSearchData((prevState) => prevState.concat(data.results))
        }
    }, [data])

    const loadMore = () => {
        if (page < data.total_pages) {
            setPage(page + 1)
        }
    }


    if (loading) {
        return <p>isLoading...</p>
    }
    if (error) {
        return <p>error</p>
    }
    return (
        <VerticalList data={searchData} title={'Search List'} loadMore={loadMore} />
    )
}


export default Search