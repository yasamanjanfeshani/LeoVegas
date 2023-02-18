import { StyledSearchResult, StyledSearchItem, StyledImageContain, StyledTitle } from './styles'
import { IPopularMovie } from '../../interface'

interface IProps {
    data: IPopularMovie
}

const SearchResult = ({ data }: IProps) => {
    return (

        <StyledSearchResult>
            {data && data.results.map((value, index) =>
                <StyledSearchItem key={index} to={`/movie/${value.id}`} data-testid={value.title}>
                    <StyledImageContain style={{ background: `url(${process.env.REACT_APP_IMAGE_URL + '' + value.poster_path})`, backgroundSize: 'cover' }}>
                    </StyledImageContain>
                    <StyledTitle >{value.title}</StyledTitle>
                </StyledSearchItem>
            )}
        </StyledSearchResult>
    )
}

export default SearchResult