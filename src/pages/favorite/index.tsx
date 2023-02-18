import { useEffect, useState } from "react"
import VerticalList from "../../components/verticallist"
import { StyledText } from './styles'

const Favorite = () => {

    const [listFavorite, setListFavorite] = useState([])

    useEffect(() => {
        setListFavorite(JSON.parse(localStorage.getItem('favorite') || '[]'))
    }, [])

    return (
        listFavorite.length > 0 ?
            <VerticalList data={listFavorite} title={'Favorite List'} />
            :
            <StyledText>your favorite list is empty</StyledText>

    )
}

export default Favorite