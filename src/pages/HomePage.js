import {useState, useEffect} from "react";
import { useRouteMatch } from "react-router-dom";
import { FetchTrendingMovies } from "../API/MoviesAPI";
import { Container} from '../components/Container/Container.styled.js';
import { MoviesList } from "../components/MoviesList/MoviesList";
import { Title } from '../components/Title/Title';

export default function  HomePage() {
  const [movies, setMovies] = useState(null);
  const {url} = useRouteMatch();

  useEffect( () => {
    FetchTrendingMovies()
    .then(res => setMovies(res.results));
  }, []);

  return (
    <Container>
      <Title text="Trending today"/>
      {movies && <MoviesList movies={movies} url={url}/>}
    </Container>
  );
}

