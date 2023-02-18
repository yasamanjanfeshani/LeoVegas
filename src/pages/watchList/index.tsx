import { useEffect, useState } from "react"
import VerticalList from "../../components/verticallist"
import { StyledText } from './styles'

const WatchList = () => {
    const [listWatchLater, setListWatchLater] = useState([])

    useEffect(() => {
        setListWatchLater(JSON.parse(localStorage.getItem('WatchList') || '[]'))
    }, [])

    return (
        listWatchLater.length > 0 ?
            <VerticalList data={listWatchLater} title={'Watch List'} />
            :
            <StyledText>your Watch list is empty</StyledText>
    )
}

export default WatchList