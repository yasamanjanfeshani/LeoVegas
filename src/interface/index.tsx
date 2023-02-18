

export interface IPopularMovie {
    page: number,
    total_results: number,
    total_pages: number,
    results: IMovie[]

}

export interface IMovie {
    poster_path: string | null
    adult: boolean
    overview: string
    release_date: string
    genre_ids: number[]
    id: number
    original_title: string
    original_language: string
    title: string
    backdrop_path: string | null
    popularity: number
    vote_count: number
    video: boolean
    vote_average: number
}


export interface IDetailMovie {
    adult: boolean,
    backdrop_path: string,
    belongs_to_collection: null,
    budget: number,
    genres: [
        {
            id: number,
            name: string
        }
    ],
    homepage: string,
    id: number,
    imdb_id: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: null,
    production_companies: IProduction_Companies[]
    production_countries: [
        {
            iso_3166_1: string,
            name: string
        }
    ],
    release_date: string,
    revenue: number,
    runtime: number,
    spoken_languages: [
        {
            iso_639_1: string,
            name: string
        }
    ],
    status: string,
    tagline: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number

}


export interface IProduction_Companies {
    id: number,
    logo_path: string | null,
    name: string,
    origin_country: string

}