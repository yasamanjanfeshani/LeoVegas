import useFetchData from "../../hooks/useFetch"
import { DetailMovie } from "../../api"
import { useParams } from 'react-router-dom';
import MovieDetail from "../../components/movieDetail";

const Movie = () => {
    const { movieId } = useParams<{ movieId: string }>();
    const { data, error, loading } = useFetchData(DetailMovie(movieId))
    if (error) {
        return <p>error</p>
    }
    if (loading) {
        return <p>isLoading...</p>
    }
    return (
        <MovieDetail data={data} />
    )
}

export default Movie