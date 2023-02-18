import { StyledMovieBanner, StyledPoster, StyledOverview, StyledTitle, StyledDescription } from './styles'
import { IDetailMovie } from '../../interface'

interface IProps {
    data: IDetailMovie
}

const MovieDetail = ({ data }: IProps) => {
    return (
        data &&
        <StyledMovieBanner>
            <StyledPoster src={`${process.env.REACT_APP_IMAGE_URL}${data.poster_path}`} alt={data.title} title={data.title} />
            <StyledOverview>
                <StyledTitle>{data.title}</StyledTitle>
                <StyledDescription>{data.overview}</StyledDescription>
            </StyledOverview>
        </StyledMovieBanner>

    )
}

export default MovieDetail