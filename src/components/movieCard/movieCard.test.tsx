import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MovieCard from './index';
import '@testing-library/jest-dom'

const movie = {
    "poster_path": "/e1mjopzAS2KNsvpbpahQ1a6SkSn.jpg",
    "adult": false,
    "overview": "From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets for the United States government, undertaking high-risk black ops missions in exchange for commuted prison sentences.",
    "release_date": "2016-08-03",
    "genre_ids": [
        14,
        28,
        80
    ],
    "id": 297761,
    "original_title": "Suicide Squad",
    "original_language": "en",
    "title": "Suicide Squad",
    "backdrop_path": "/ndlQ2Cuc3cjTL7lTynw6I4boP4S.jpg",
    "popularity": 48.261451,
    "vote_count": 1466,
    "video": false,
    "vote_average": 5.91
}

describe('MovieCard', () => {
    afterEach(() => {
        localStorage.clear();
    });

    it('should render a movie card with a link and two icons', () => {
        render(
            <BrowserRouter>
                <MovieCard data={movie} />
            </BrowserRouter>
        );

        const title = screen.getByTestId(movie.title);
        expect(title).toBeInTheDocument();

        const favoriteIcon = screen.getByAltText('favorite');
        expect(favoriteIcon).toBeInTheDocument();

        const watchListIcon = screen.getByAltText('WatchList');
        expect(watchListIcon).toBeInTheDocument();
    });

    it('should toggle the favorite icon on click', () => {
        render(
            <BrowserRouter>
                <MovieCard data={movie} />
            </BrowserRouter>
        );

        const favoriteIcon = screen.getByAltText('favorite');

        fireEvent.click(favoriteIcon);

        const storedFavorites = JSON.parse(localStorage.getItem('favorite') || '[]');
        expect(storedFavorites.some((fav: any) => fav.id === movie.id)).toBe(true);

        fireEvent.click(favoriteIcon);

        const updatedStoredFavorites = JSON.parse(localStorage.getItem('favorite') || '[]');
        expect(updatedStoredFavorites.some((fav: any) => fav.id === movie.id)).toBe(false);

    });

    it('should toggle the watch list icon on click', () => {
        render(
            <BrowserRouter>
                <MovieCard data={movie} />
            </BrowserRouter>
        );

        const watchListIcon = screen.getByAltText('WatchList');

        fireEvent.click(watchListIcon);

        const storedWatchList = JSON.parse(localStorage.getItem('WatchList') || '[]');
        expect(storedWatchList.some((fav: any) => fav.id === movie.id)).toBe(true);

        fireEvent.click(watchListIcon);

        const updatedStoredWatchList = JSON.parse(localStorage.getItem('WatchList') || '[]');
        expect(updatedStoredWatchList.some((fav: any) => fav.id === movie.id)).toBe(false);
    });
});