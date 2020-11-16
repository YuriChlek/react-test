import React from 'react';
import data from '../../data/blog-pages/pagesBlog.json'
import style from './style.css'
import {Link} from "react-router-dom";

class Blog extends React.Component {
    createPosts = () => {
        return data.map(
            (item, index) => {
                const pageUrl = "/blog-html-page-" + index;
                return (
                    <li key={index} className={style.blogItem}>
                        <div className={style.itemImageWrapper}>
                            <img className={style.itemImage}
                                 src={window.location.origin + '/images/banner/' + item.image} alt="banner"/>
                        </div>
                        <div className={style.descriptionWrapper}>
                            <p className={style.text}>{item.description}</p>
                            <Link className={style.seeMore} to={pageUrl}>{"See more"}</Link>
                        </div>
                    </li>
                )
            }
        )
    }

    render() {
        return (
            <ul className={style.postsWrapper}>
                {this.createPosts()}
            </ul>
        )
    }
}

export default Blog;
