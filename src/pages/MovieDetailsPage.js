import { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom';
import { useParams } from "react-router-dom";
import { FetchMoviesId } from "../API/MoviesAPI";
import { Container} from '../components/Container/Container.styled.js';
import { CastNavigation } from '../components/CastNavigation/CastNavigation';
import { ImgView } from "../components/ImgView/ImgView";
import { Cast } from "../components/Cast/Cast";
import { Reviews } from "../components/Reviews/Reviews";

export default function  MoveDetailsPage() {
  const [movies, setMovies] = useState(null);
  const {movieId} = useParams();

  useEffect( () => {
    FetchMoviesId(movieId)
    .then(setMovies);
  }, [movieId]);

  return (
    <>
      <Container>
        {movies && <ImgView movies={movies}/>}
      </Container>
      <hr/>
      <Container>
        {movies && <CastNavigation movies={movies}/>}
      </Container>
      <hr/>
      <Container>
        <Switch>
          <Route exact path="/movies/:movieId/cast" component={Cast} />
          <Route path="/movies/:movieId/reviews" component={Reviews}/>
        </Switch>
      </Container>
    </>
  );
}
