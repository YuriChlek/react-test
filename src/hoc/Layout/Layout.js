import React from 'react';
import style from './style.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import About from "../../components/About/About";
import Home from "../Home/Home";
import Contacts from "../../components/Contacts/Contacts";
import Blog from "../Blog/Blog";
import {Switch, Route} from "react-router-dom";

class Layout extends React.Component {
    render() {
        return (
            <div className={style.wrapper}>
                <Header/>
                    <div className={style.mainContent}>
                        <Switch>
                            <Route path="/about" component={About}/>
                            <Route path="/blog" component={Blog}/>
                            <Route path="/contacts" component={Contacts}/>
                            <Route path="/" exact={true} component={Home}/>
                        </Switch>
                    </div>
                <Footer/>
            </div>
        )
    }
}

export default Layout;
