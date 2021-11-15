import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import Navigation from './components/Navigation/Navigation';


const App = () => (
  <>
    <Navigation/>
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="/movies/:movieId" component={MovieDetailsPage}/>
      <Route path="/movies" component={MoviesPage}/>
      <Route component={HomePage}/>
    </Switch>
  </>
);


export default App;