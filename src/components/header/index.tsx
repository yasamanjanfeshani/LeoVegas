import { StyledHeader, StyledLink } from './styles'


const Header = () => {
    return (
        <StyledHeader data-testid="header">
            <StyledLink to="/">
                Online Movie Logo
            </StyledLink>
            <StyledLink to="/favorite">Favorite</StyledLink>
            <StyledLink to="/Watchlist">Watch Later</StyledLink>
        </StyledHeader>
    )
}

export default Header