import React from 'react';
import style from './style.css';
import logo from './logo.png';
import {Link} from "react-router-dom";

const Logo = () => {
    return (
        <div className={style.logoWrapper}>
            <Link to="/">
                <img className={style.logoImage} src={logo} alt="logo"/>
            </Link>
        </div>
    )
}

export default Logo;
