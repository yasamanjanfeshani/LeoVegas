import { StyledVertical, StyledTitle, StyledButton } from './styles'
import MovieCard from '../movieCard'
import { IMovie } from '../../interface'

interface IProps {
    data: IMovie[]
    title: string
    loadMore?: () => void
}

const VerticalList = ({ data, title, loadMore }: IProps) => {
    return (
        <>
            <StyledTitle>{title}</StyledTitle>
            <StyledVertical>

                {data && data.map((value, index) =>
                    <MovieCard key={index} data={value} />
                )}
            </StyledVertical>
            {loadMore &&
                <StyledButton onClick={loadMore}>Load More</StyledButton>
            }
        </>
    )
}

export default VerticalList