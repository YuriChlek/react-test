import React from 'react';
import {Link} from "react-router-dom";
import style from './style.css'

class Footer extends React.Component {
    state = {

    };

    submitHandler = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <footer className={style.footer}>
                <ul className={style.footerWrapper}>
                    <li className={style.footerColumn}>
                        <h4 className={style.copyrightTitle}>Piroll Design, inc</h4>
                        <p className={style.copyright}>&copy; 2020 Testing react project React.js</p>
                        <p className={style.copyright}>Design by Yuri Chlek</p>
                    </li>
                    <li className={style.footerColumn}>
                        <div><Link className={style.email} to={'/'}>yuruchlek@gmail.com</Link></div>
                        <div><span>+380671234567</span></div>
                    </li>
                    <li className={style.footerColumn}>
                        <div className={style.socialLinkWrapper}>
                            <Link className={style.socialLink} to={'/'}>Facebook</Link>
                        </div>
                        <div className={style.socialLinkWrapper}>
                            <Link className={style.socialLink} to={'/'}>Twitter</Link>
                        </div>
                        <div className={style.socialLinkWrapper}>
                            <Link className={style.socialLink} to={'/'}>Instagram</Link>
                        </div>
                        <div className={style.socialLinkWrapper}>
                            <Link className={style.socialLink} to={'/'}>Pinterest</Link>
                        </div>
                    </li>
                    <li className={style.footerColumn}>
                        <form action={'#'}>
                            <label htmlFor="Subscribe">Join our mailling list for exclusive news</label>
                            <input className={style.inputSubscribe} id={"Subsribe"} type={"email"}
                                   placeholder={"Enter your email"}/>
                            <button className={style.buttonSubscribe} type={"submit"}>Subsribe</button>
                        </form>
                    </li>
                </ul>
            </footer>
        )
    }
}

export default Footer;
