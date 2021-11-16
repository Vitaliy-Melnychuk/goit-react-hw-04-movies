import React from "react";
import { NavLink, useRouteMatch, useLocation } from "react-router-dom";
import s from './CastNavigation.module.css'; 

export function CastNavigation() {
  const location = useLocation();
  const { url } = useRouteMatch();
  return (
    <div>
       <p>Addition information</p>
       <ul className={s.list}>
            <li>
                <NavLink exact to={{
                            pathname: `${url}/cast`,
                            state: {
                                from: {location},
                            }
                        }} className={s.link} activeClassName={s.activeLink}>Cast</NavLink>
            </li>
            <li>
                <NavLink exact to={{
                            pathname: `${url}/reviews`,
                            state: {
                                from: {location},
                            }
                        }} className={s.link} activeClassName={s.activeLink}>Reviews</NavLink>
            </li>
        </ul>
    </div>
  );
}