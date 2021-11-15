import React, { useState ,useEffect} from "react";
import { useParams } from "react-router-dom";
import { FetchCastMovies } from '../../API/MoviesAPI';
import s from './Cast.module.css';

export function  Cast() {
    const [actors, setActors] = useState(null);
    const {movieId} = useParams();
    actors && console.log(actors);

    useEffect( () => {
        FetchCastMovies(movieId)
        .then(res => setActors(res.cast));
    }, [movieId]);
    
    return (
      <ul>
            {actors && actors.map(actor => {
                const {id, profile_path, name, character} = actor;
                if (profile_path === null) {return <div key={id}></div>}
                return (
                    <li key={id}>
                        <div className={s.imgBox}>
                            <img 
                                src={`https://image.tmdb.org/t/p/w500${profile_path}`} 
                                alt={id}
                                className={s.img}
                            />
                        </div>
                        <p className={s.p}>{name}</p>
                        <p className={s.p}>{`Character: ${character}`}</p>
                    </li>
                );
            })}
      </ul>
    );
}