import React from "react";
import { NavLink } from "react-router-dom";
import s from './Navigation.module.css';

export default function Navigation() {
    return (
        <nav className={s.nav}>
            <ul className={s.list}>
                <li className={s.item}>
                    <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>Home</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/movies" className={s.link} activeClassName={s.activeLink}>Moveis</NavLink>
                </li>
            </ul>
        </nav>
    );
} 