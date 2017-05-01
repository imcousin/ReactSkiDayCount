import React from 'react';
import { Link } from 'react-router';
import HomeIcon from 'react-icons/lib/fa/home';
import AddDayIcon from 'react-icons/lib/fa/calendar-plus-o';
import ListDaysIcon from 'react-icons/lib/fa/table';

export const Menu = () => 
    <nav>
        <ul>
            <li><a href="/">H</a></li>
            <li><a href="/add-day">A</a></li>
            <li><a href="/list-days">L</a></li>
            {/*<li><Link to="/add-day" activeClassName="active">A</Link></li>
            <li><Link to="/list-days" activeClassName="active">L</Link></li>*/}
            {/*<li><Link to="/" activeClassName="active"><HomeIcon /></Link></li>
            <li><Link to="/add-day" activeClassName="active"><AddDayIcon /></Link></li>
            <li><Link to="/list-days" activeClassName="active"><ListDaysIcon /></Link></li>*/}
        </ul>
    </nav>