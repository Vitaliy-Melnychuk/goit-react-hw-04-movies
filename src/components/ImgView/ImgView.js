import React from "react";
// import { Details } from '../Details/Details';
import s from './ImgView.module.css'; 

export function ImgView({movies}) {
  const {release_date, poster_path, overview, title, vote_average, genres} = movies;
  const release = release_date[0]+release_date[1]+release_date[2]+release_date[3];
  const genresString = genres.map(genry => genry.name).join(' ');
  return (
    <div className={s.imgWrapper}>
        <div className={s.imgBox}>
            <img 
                src={`https://image.tmdb.org/t/p/w500${poster_path}`} 
                alt={title}
                className={s.img}
            />
        </div>
        <div className={s.description}>
          <h2 className={s.margin}>{`The ${title} (${release})`}</h2>
          <p className={s.margin}>Vote average: {vote_average}</p>
          <h3 className={s.margin}>Overview </h3>
          <p className={s.margin}>{overview}</p>
          <h3 className={s.margin}>Genres</h3>
         <p>{genresString}</p>
    </div>
    </div>
  );
}