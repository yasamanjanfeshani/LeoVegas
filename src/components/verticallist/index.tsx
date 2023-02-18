import { StyledVertical, StyledTitle, StyledButton } from './styles'
import MovieCard from '../movieCard'
import { IMovie } from '../../interface'

interface IProps {
    data: IMovie[]
    title: string
    loadMore?: () => void
    loading?: boolean
}

const VerticalList = ({ data, title, loadMore, loading }: IProps) => {
    return (
        <>
            <StyledTitle>{title}</StyledTitle>
            <StyledVertical>

                {data && data.map((value, index) =>
                    <MovieCard key={index} data={value} />
                )}
            </StyledVertical>
            {loadMore &&
                <StyledButton onClick={loadMore}>{loading ? 'is loading...' : 'Load More'}</StyledButton>
            }
        </>
    )
}

export default VerticalList