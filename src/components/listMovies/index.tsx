import { StyledListPopular, StyledTitle, StyledListContainer } from './styles'
import { IPopularMovie } from '../../interface'
import MovieCard from '../movieCard'

interface IProps {
    data: IPopularMovie
    title: string
}

const ListMovies = ({ data, title }: IProps) => {
    return (
        <StyledListPopular>
            <StyledTitle>
                {title}
            </StyledTitle>
            <StyledListContainer>
                {data && data.results.map((value, index) =>
                    <MovieCard key={index} data={value} />
                )}
            </StyledListContainer>
        </StyledListPopular>
    )
}

export default ListMovies