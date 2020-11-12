import React from 'react';
import {Link} from "react-router-dom";
import style from './style.css';
import pages from '../../data/pages.json';

class Menu extends React.Component {
    state = {
        menuOpen: false,
        menuClasses: [style.menu],
        blindClasses: [style.blind]
    }

    renderLinks = () => {
        return pages.map((item, index) => (
                <li key={index} className={style.menuItem}>
                    <Link to={item.link} onClick={this.toggleMenu}>{item.title}</Link>
                </li>
            )
        )
    }

    toggleMenu = () => {
        let menuClasses = [style.menu],
            blindClasses= [style.blind];
        if (!this.state.menuOpen) {
            menuClasses.push(style.show);
            blindClasses.push(style.show);
            this.setState({
                menuOpen: true,
                menuClasses: menuClasses,
                blindClasses: blindClasses
            })
        } else {
            this.setState({
                menuOpen: false,
                menuClasses: menuClasses,
                blindClasses: blindClasses
            })
        }
    }

   render() {
       return (
           <React.Fragment>
            <span className={style.menuButton} onClick={this.toggleMenu}>
                <span>&nbsp;</span>
            </span>
               <div className={this.state.blindClasses.join(' ')} onClick={this.toggleMenu}>&nbsp;</div>
               <ul className={this.state.menuClasses.join(' ')}>
                   {this.renderLinks()}
               </ul>
           </React.Fragment>
       )
   }
}

export default Menu;
