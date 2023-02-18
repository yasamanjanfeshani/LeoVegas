import { ReactNode } from "react"
import Header from "../header"
import { StyledLayout } from './styles'

interface IProps {
    children: ReactNode
}

const Layout = ({ children }: IProps) => {
    return (
        <StyledLayout>
            <Header />
            {children}
        </StyledLayout>
    )
}

export default Layout