import React, { useState ,useEffect} from "react";
import { useParams } from "react-router-dom";
import { FetchReviewsMovies } from '../../API/MoviesAPI';
// import s from './Reviews.module.css';

export function Reviews() {
    const [actors, setActors] = useState(null);
    const {movieId} = useParams();

    actors && console.log(actors);

    useEffect( () => {
        FetchReviewsMovies(movieId)
        .then(res => setActors(res.results));
    }, [movieId]);
    
    return (
        // <p>We don't have any reviews for this movie.</p>
         <p>Серафім перевір посилання.</p>
    //   <ul>
    //         {actors && actors.map(actor => {
    //             const {id, profile_path, name, character} = actor;
    //             if (profile_path === null) {return <div key={id}></div>}
    //             return (
    //                 <li key={id}>
    //                     <p className={s.p}>{name}</p>
    //                     <p className={s.p}>{`Character: ${character}`}</p>
    //                 </li>
    //             );
    //         })}
    //   </ul>
    );
}