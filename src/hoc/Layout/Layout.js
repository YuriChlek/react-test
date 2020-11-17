import React from 'react';
import style from './style.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import About from "../About/About";
import Home from "../Home/Home";
import Contacts from "../../components/Contacts/Contacts";
import Blog from "../../components/Blog/Blog";
import BlogPage from "../../components/BlogPage/BlogPage";
import ErrorPage from "../../components/ErrorPage/ErrorPage";
import dataBlogPages from '../../data/blog-pages/pagesBlog.json'
import {Switch, Route} from "react-router-dom";

class Layout extends React.Component {
    renderBlogPages = () => {
        return dataBlogPages.map((item, index) => {
            const pageUrl = "/blog-html-page-" + index;
            return (
                <Route path={pageUrl} exact={true} key={index}>
                    <BlogPage index = {index}/>
                </Route>
            )
        })
    }

    render() {
        return (
            <div className={style.wrapper}>
                <Header/>
                <div className={style.mainContent}>
                    <Switch>
                        <Route path="/" exact={true} component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/blog" component={Blog}/>
                        <Route path="/contacts" component={Contacts}/>
                        {this.renderBlogPages()}
                        <Route component={ErrorPage}/>
                    </Switch>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Layout;
