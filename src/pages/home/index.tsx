import Banner from "../../components/banner"
import useFetchData from "../../hooks/useFetch"
import { PopularMovie, TopRatedMovie } from "../../api"
import ListMovies from "../../components/listMovies"
import Loading from "../../components/loading"

const Home = () => {
    const { data: popular, error, loading } = useFetchData(PopularMovie())
    const { data: topRated } = useFetchData(TopRatedMovie())

    if (error) {
        return <p>error</p>
    }
    if (loading) {
        return <Loading />
    }
    return (
        <div>
            <Banner />
            <ListMovies data={popular} title={'Popular Movies'} />
            <ListMovies data={topRated} title={'Top Rated Movies'} />
        </div>
    )
}

export default Home