import { useEffect, useState } from "react"
import VerticalList from "../../components/verticallist"

const WatchList = () => {
    const [listWatchLater, setListWatchLater] = useState([])

    useEffect(() => {
        setListWatchLater(JSON.parse(localStorage.getItem('WatchList') || '[]'))
    }, [])

    return (
        <VerticalList data={listWatchLater} title={'Watch List'} />
    )
}

export default WatchList