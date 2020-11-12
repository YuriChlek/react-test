import React from 'react';
import styles from './style.css'
import Logo from "../../components/Logo/Logo";
import Menu from "../Menu/Menu";

class Header extends React.Component {
    render() {
        return (
            <header className={styles.header}>
                <Logo/>
                <Menu/>
            </header>
        )
    }
}

export default Header;
