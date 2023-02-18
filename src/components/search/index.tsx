import { useState } from 'react';
import { StyledForm, StyledInput, StyledInputContainer, StyledButton, StyledSearchImage } from './styles'
import SearchResult from '../searchResult';
import useDebounce from '../../hooks/useDebounce';
import { SearchMovie } from '../../api';
import axiosHelper from '../../helper/axiosHelper';
import { IPopularMovie } from '../../interface';
import { Link } from 'react-router-dom';

const Search = () => {
    const [data, setData] = useState<IPopularMovie>()

    const handleSearch = () => {
        if (debouncedQuery) {
            fetchData();
        }
    }

    const [debouncedQuery, setDebouncedQuery] = useDebounce(handleSearch, 500);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDebouncedQuery(event.target.value);
    };

    const fetchData = async () => {
        try {
            const data = await axiosHelper.get(SearchMovie(debouncedQuery, 1));
            setData(data)
        } catch (error) {
            console.error('Failed to fetch data:', error);
        }
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <StyledForm onSubmit={handleSubmit}>
            <StyledInputContainer>
                <StyledSearchImage src="/images/search.png" alt="search" title="search" />
                <StyledInput
                    type="text"
                    id="search"
                    value={debouncedQuery}
                    onChange={handleInputChange}
                    aria-label="Search for movies"
                    placeholder='Search movies here'
                />
                <Link to={`/search/${debouncedQuery}`}>
                    <StyledButton type="submit">Search</StyledButton>
                </Link>
            </StyledInputContainer>
            {data?.results && data?.results.length > 0 &&
                <SearchResult data={data} />
            }
        </StyledForm>
    );
}

export default Search;