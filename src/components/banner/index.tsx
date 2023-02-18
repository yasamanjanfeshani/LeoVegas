import { StyledBanner } from './styles'
import Search from '../search'

const Banner = () => {
    return (
        <StyledBanner style={{ background: `url(/images/banner.png)`, backgroundSize: 'cover' }} data-testid="banner">
            <Search />
        </StyledBanner>
    )
}

export default Banner