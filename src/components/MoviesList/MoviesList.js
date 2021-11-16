import React from "react";
import { Link, useLocation } from "react-router-dom";

export function  MoviesList({movies, url}) {
    const location = useLocation();
  return (
      <ul>
            {movies.map(movie => {
                const {id, title} = movie;
                return (
                    <li key={id}>
                        <Link to={{
                            pathname: `${url}movies/${id}`,
                            state: {
                                from: {location},
                            }
                        }}>{title}</Link>
                    </li>
                );
            })}
      </ul>
  );
}