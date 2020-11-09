import React from 'react';
import {Link} from "react-router-dom";
import style from './style.css';
import pages from '../../data/pages.json';

const Menu = () => {
    const renderLinks = () => {
        return pages.map((item, index) => (
                <li key={index} className={style.menuItem}>
                    <Link to={item.link}>{item.title}</Link>
                </li>
            )
        )
    }

    return (
        <ul className={style.menu}>
            {renderLinks()}
        </ul>
    )
}

export default Menu;
