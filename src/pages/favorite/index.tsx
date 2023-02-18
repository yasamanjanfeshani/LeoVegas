import { useEffect, useState } from "react"
import VerticalList from "../../components/verticallist"

const Favorite = () => {

    const [listFavorite, setListFavorite] = useState([])

    useEffect(() => {
        setListFavorite(JSON.parse(localStorage.getItem('favorite') || '[]'))
    }, [])

    return (
        <VerticalList data={listFavorite} title={'Favorite List'} />
    )
}

export default Favorite