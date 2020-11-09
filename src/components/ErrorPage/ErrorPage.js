import React from 'react';
import style from "./style.css";

const ErrorPage = () => {
    return (
        <div className={style.errorWrapper}>
            <img className={style.errorMessage} src={window.location.origin + '/images/404/404.jpg'} alt="404"/>
        </div>
    )
}

export default ErrorPage;
