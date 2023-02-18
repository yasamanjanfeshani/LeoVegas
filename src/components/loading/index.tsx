import { StyledLoadingContainer } from './styles'

const Loading = () => {
    return (
        <StyledLoadingContainer>
            <img src="/images/spinner.svg" width={60} height={60} />
        </StyledLoadingContainer>
    )
}

export default Loading