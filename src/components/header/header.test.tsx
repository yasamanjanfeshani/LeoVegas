import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './index';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom'


describe('Header component', () => {
    test('renders the correct links', () => {
        render(<BrowserRouter><Header /></BrowserRouter>);

        const homeLink = screen.getByRole('link', { name: /online movie logo/i });
        expect(homeLink).toBeInTheDocument();

        const favoriteLink = screen.getByRole('link', { name: /favorite/i });
        expect(favoriteLink).toBeInTheDocument();

        const watchlistLink = screen.getByRole('link', { name: /watch later/i });
        expect(watchlistLink).toBeInTheDocument();
    });
});