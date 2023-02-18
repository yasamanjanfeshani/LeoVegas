

type ItemWithId = { id: number | null, poster_path: string | null };

const toggleIdInLocalStorage = (item: ItemWithId, key: string) => {
    const storedData = localStorage.getItem(key);
    let updatedData: ItemWithId[] = [];

    if (storedData) {
        updatedData = JSON.parse(storedData);
        const index = updatedData.findIndex((value) => value.id === item.id);
        if (index !== -1) {
            updatedData.splice(index, 1); // remove item from array
        } else {
            updatedData.push(item); // add item to array
        }
    } else {
        updatedData.push(item);
    }

    localStorage.setItem(key, JSON.stringify(updatedData));
};

export default toggleIdInLocalStorage;