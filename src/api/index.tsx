

export const PopularMovie = () => `/movie/popular`
export const TopRatedMovie = () => `/movie/top_rated`
export const SearchMovie = (query: string | undefined, page: number) => `/search/movie?query=${query}&page=${page}`
export const DetailMovie = (movie_id: string | undefined) => `/movie/${movie_id}`