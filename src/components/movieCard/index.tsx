import { StyledMovieCard, StyledStar, StyledIconContainer } from './styles'
import { IMovie } from '../../interface'
import toggleIdInLocalStorage from '../../helper/toggleIdInLocalStorage'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

interface IProps {
    data: IMovie
}

const MovieCard = ({ data }: IProps) => {
    const [isFavorite, setIsFavorite] = useState<boolean>(false);
    const [isWatchList, setIsWatchList] = useState<boolean>(false);
    const [favorites, setFavorites] = useState<number[]>([])
    const [whatList, setWatchList] = useState<number[]>([])

    useEffect(() => {
        setFavorites(JSON.parse(localStorage.getItem('favorite') || '[]'))
        setWatchList(JSON.parse(localStorage.getItem('WatchList') || '[]'))
    }, []);


    const handleFavorite = (event: any) => {
        event.preventDefault();
        toggleIdInLocalStorage({ id: data.id, poster_path: data.poster_path }, "favorite")
        setFavorites(JSON.parse(localStorage.getItem('favorite') || '[]'))
    }

    useEffect(() => {
        //@ts-ignore
        if (favorites.findIndex((value) => value.id === data.id) !== -1) {
            setIsFavorite(true)
        } else {
            setIsFavorite(false)
        }
    }, [favorites, data.id])


    const handleWatchList = (event: any) => {
        event.preventDefault();
        toggleIdInLocalStorage({ id: data.id, poster_path: data.poster_path }, "WatchList")
        setWatchList(JSON.parse(localStorage.getItem('WatchList') || '[]'))
    }

    useEffect(() => {
        //@ts-ignore
        if (whatList.findIndex((value) => value.id === data.id) !== -1) {
            setIsWatchList(true)
        } else {
            setIsWatchList(false)
        }
    }, [whatList, data.id])



    const showStar = isFavorite ? <StyledStar src="/images/yellow-star.png" onClick={handleFavorite} alt="favorite" title="favorite" /> : <StyledStar src="/images/star.png" onClick={handleFavorite} alt="favorite" title="favorite" />
    const showWatchList = isWatchList ? <StyledStar src="/images/play-colorful.png" onClick={handleWatchList} alt="WatchList" title="WatchList" /> : <StyledStar src="/images/play.png" onClick={handleWatchList} alt="WatchList" title="WatchList" />

    return (
        <Link to={`/movie/${data.id}`} data-testid={data.title}>
            <StyledMovieCard style={{ backgroundImage: `url(${process.env.REACT_APP_IMAGE_URL}${data.poster_path})`, backgroundSize: 'cover' }}>
                <StyledIconContainer>
                    {showStar}
                    {showWatchList}
                </StyledIconContainer>
            </StyledMovieCard>
        </Link>
    )
}

export default MovieCard

