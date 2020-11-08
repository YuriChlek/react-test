import React from 'react';
import data from '../../data/blog-pages/blogPages.json'
import style from './style.css'
import {Link} from "react-router-dom";

class Blog extends React.Component {
    createPosts = () => {
        return data.map(
            (item, index) => {
                const pageUrl = "/blog-page-html-" + index;
                return (
                    <li>
                        <Link to={pageUrl}>{item}</Link>
                    </li>
                )
            }
        )
    }
    render() {
        return (
            <ul>
                {this.createPosts()}
            </ul>
        )
    }
}

export default Blog;