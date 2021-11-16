import React, { useState ,useEffect} from "react";
import { useParams } from "react-router-dom";
import { FetchReviewsMovies } from '../../API/MoviesAPI';
import s from './Reviews.module.css';

export function Reviews() {
    const [reviews, setReviews] = useState(null);
    const [status, setStatus] = useState('idle');
    const {movieId} = useParams();

    useEffect( () => {
        FetchReviewsMovies(movieId)
        .then(res => {
            if (res.results.length < 1) {
                setStatus('error');
            } else {
                setReviews(res.results);
                setStatus('resolved');
            }
        });
    }, [movieId]);
    
    return (
        <>
            {status === 'error' && <p>We dont have any reviews for this movie.</p>}
            {status === 'resolved' && 
            <ul>
                {reviews.map(review => {
                        const {id, content, author} = review;
                        return (
                            <li key={id}>
                                <p className={s.p}>{`Author: ${author}`}</p>
                                <p className={s.p}>{content}</p>
                            </li>
                        );
                    }
                )}
            </ul>}
        </>
    );
}