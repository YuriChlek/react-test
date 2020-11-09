import React from 'react';
import {Link} from "react-router-dom";
import style from './style.css';
import is from 'is_js';

class Footer extends React.Component {
    state = {
        errorMessage: 'Enter correct email',
        valid: true,
    };

    submitHandler = (event) => {
        const isValid = is.email(event.target[0].value);
        if (!isValid) {
            event.preventDefault();
            this.setState({
                valid: isValid,
            })
        } else {
            event.target[0].value = '';
        }
    };

    validEmail = (event) => {
        console.log(event)
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
                        <form action={'#'} onSubmit={this.submitHandler}>
                            {this.state.valid &&
                            <span>Join our mailling list for exclusive news</span>}
                            {!this.state.valid &&
                            <span className={style.errorMessage}>{this.state.errorMessage}</span>}
                            <input onSubmit={this.validEmail}
                                   className={style.inputSubscribe}
                                   id={"Subscribe"}
                                   placeholder={"Enter your email"}/>
                            <button className={style.buttonSubscribe}
                                    type={"submit"}>Subscribe
                            </button>
                        </form>
                    </li>
                </ul>
            </footer>
        )
    }
}

export default Footer;
