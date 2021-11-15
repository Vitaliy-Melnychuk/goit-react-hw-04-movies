const BASE_URL = 'https://api.themoviedb.org/3';
const URL_key = '?api_key=49de7a3ee6d88275d529ee9d3e9604bd';

async function FetchTemplate(url) {
    const res = await fetch(url);
    return res.ok ? await res.json() : Promise.reject(new Error('Not found'));
}

export function FetchTrendingMovies() {
    return FetchTemplate(`${BASE_URL}/trending/movie/day${URL_key}`);
}

export function FetchMoviesId(movieId) {
    return FetchTemplate(`${BASE_URL}/movie/${movieId}${URL_key}`);
}

export function FetchSearchMovies(searchInput) {
    return FetchTemplate(`${BASE_URL}/search/movie${URL_key}&query=${searchInput}`);
}

export function FetchCastMovies(movieId) {
    return FetchTemplate(`${BASE_URL}/movie/${movieId}/credits${URL_key}`);
}

export function FetchReviewsMovies(movieId) {
    return FetchTemplate(`${BASE_URL}/movie/${movieId}/reviews${URL_key}`);
}