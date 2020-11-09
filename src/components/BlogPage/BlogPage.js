import React from 'react';
import style from './style.css';
import data from '../../data/blog-pages/blogPages.json'

const BlogPage = (props) => {
    return (
        <React.Fragment>
            <h1>{data[props.children]}</h1>
        </React.Fragment>
    )
}

export default BlogPage;
