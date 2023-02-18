import { queryByText, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import VerticalList from '.';
import '@testing-library/jest-dom'


const mockData = [
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
]


describe('verticalList component', () => {
    test('renders title of page', () => {
        render(
            <BrowserRouter>
                <VerticalList data={mockData} title="Popular Movies" />
            </BrowserRouter>)

        const titleElement = screen.getByText('Popular Movies');
        expect(titleElement).toBeInTheDocument()
    })

    test('renders list of movie', () => {
        render(
            <BrowserRouter>
                <VerticalList data={mockData} title="Popular Movies" />
            </BrowserRouter>)
        mockData.forEach((movie) => {
            const movieElement = screen.getByTestId(movie.title);
            expect(movieElement).toBeInTheDocument();
        });;

    })


})