import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink exact to="/">HomePage</NavLink>
                </li>
                <li>
                    <NavLink to="/movies">MoveisPage</NavLink>
                </li>
            </ul>
        </nav>
    );
} 