import React, { useEffect, useState } from "react";
import { FetchSearchMovies } from "../API/MoviesAPI";
import { Container } from "../components/Container/Container.styled";
import { SearchForm } from "../components/SearchForm/SearchForm";
import { MoviesList } from "../components/MoviesList/MoviesList";

const MoviesPage = () => {
  const [searchs, setSearchs] = useState(null);
  const [searchInput, setSearchInput] = useState(null);
 
  useEffect( () => {
    searchInput && FetchSearchMovies(searchInput)
    .then(res => setSearchs(res.results));
  }, [searchInput]);

  const formSubmitHandler = (inputValue) => {
    if (inputValue.trim() !== '') {
      console.log(inputValue);
      setSearchInput(inputValue);
      return;
    }
    alert('Введіть текс для пошуку');
  };
  
  return (
    <Container>
      <SearchForm onSubmit={formSubmitHandler}/>
      {searchs && <MoviesList movies={searchs} url="/"/>}
    </Container>
  );
};

export default MoviesPage;