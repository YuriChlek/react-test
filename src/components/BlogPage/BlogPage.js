import React from 'react';
import style from './style.css';
import data from '../../data/blog-pages/pagesBlog.json'
import {Link} from "react-router-dom";

const BlogPage = (props) => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })

    const createArrows = () => {
        const maxPost = data.length - 1,
            nextPageUrl = "/blog-html-page-" + (props.index + 1),
            prevPageUrl = "/blog-html-page-" + (props.index - 1);
        return (
            <div className={style.paginator}>
                {(props.index > 0) && <Link className={style.prev} to={prevPageUrl}>Prev post</Link>}
                {(props.index < maxPost) && <Link className={style.next} to={nextPageUrl}>Next post</Link>}
            </div>
        )
    }

    return (
        <React.Fragment>
            <div className={style.bannerWrapper}>
                <img className={style.banner}
                     src={window.location.origin + '/images/banner/' + data[props.index].image} alt="banner"/>
            </div>
            <div className={style.textWrapper}>
                <h1 className={style.title}>{data[props.index].title}</h1>
                <p className={style.description}>{data[props.index].description}</p>
            </div>
            {createArrows()}
        </React.Fragment>
    )
}

export default BlogPage;
