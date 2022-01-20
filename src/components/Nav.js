import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul className="nav">
        <li className="nav-item">
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/add" activeClassName="active">
            New Poll
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/leaderboard" activeClassName="active">
            Leaderboard
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
