import { render, screen } from '@testing-library/react';
import SearchResult from '.';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom'

const mockData = {
    "page": 1,
    results: [
        {
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
    ],
    "total_results": 19629,
    "total_pages": 982
};


describe('serchResult component', () => {
    test('render list of movie in search result', () => {
        render(<BrowserRouter>
            <SearchResult data={mockData} />
        </BrowserRouter>)

        mockData.results.forEach((movie) => {
            const movieElement = screen.getByTestId(movie.title);
            expect(movieElement).toBeInTheDocument();
        });

    })
})