import React from "react";
import { Link } from "react-router-dom";

export function  MoviesList({movies, url}) {
  return (
      <ul>
            {movies.map(movie => {
                const {id, title} = movie;
                return (
                    <li key={id}>
                        <Link to={`${url}movies/${id}`}>{title}</Link>
                    </li>
                );
            })}
      </ul>
  );
}