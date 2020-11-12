import React from 'react';
import Logo from "../../components/Logo/Logo";
import Menu from "../Menu/Menu";
import style from "./style.css";

class Header extends React.Component {
    state = {
        menuOpen: false,
        headerClasses: [style.header]
    }
    headerFixed = () => {
        let headerClasses = [style.header]
        if(!this.state.menuOpen){
            headerClasses.push(style.menuOpen);
            this.setState({
                    menuOpen: true,
                    headerClasses: headerClasses
                }
            )
        } else {
            this.setState({
                    menuOpen: false,
                    headerClasses: headerClasses
                }
            )
        }
    }

    render() {
        return (
            <header className={this.state.headerClasses.join(' ')}>
                <Logo/>
                <Menu headerFixed={this.headerFixed.bind(this)}/>
            </header>
        )
    }
}

export default Header;
