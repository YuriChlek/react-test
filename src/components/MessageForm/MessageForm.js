import React, {useState} from "react"
import is from 'is_js';
import style from "./style.css"

const MessageForm = (props) => {
    const classes = [style.form],
        closeButton = [style.close, 'close'],
        [name, isValidName] = useState([style.inputWrapper]),
        [email, isValidEmail] = useState([style.inputWrapper]),
        [message, isValidMessage] = useState([style.messageWrapper]);


    if (props.classes) {
        classes.push(props.classes);
    }

    const validForm = (event) => {
        if (event.target[0].value.length < 4 || !is.email(event.target[1].value) || event.target[2].value.length < 30) {
            event.preventDefault();
        }
        if (event.target[0].value.length < 4) {
            isValidName([style.inputWrapper, style.notValid]);
        }
        if (!is.email(event.target[1].value)) {
            isValidEmail([style.inputWrapper, style.notValid]);
        }
        if (event.target[2].value.length < 30) {
            isValidMessage([style.messageWrapper, style.notValid]);
        }
        if (event.target[0].value.length >= 4) {
            isValidName([style.inputWrapper]);
        }
        if (is.email(event.target[1].value)) {
            isValidEmail([style.inputWrapper]);
        }
        if (event.target[2].value.length >= 30) {
            isValidMessage([style.messageWrapper]);
        }
    }

    return (
        <form className={classes.join(' ')} onSubmit={validForm}>
            {props.formTitle && <h3 className={style.formTitle}>{props.formTitle}</h3>}
            {props.close && <span className={closeButton.join(' ')}/>}
            <div className={name.join(' ')}>
                <span className={style.errorMessage}>Enter correct name. Minimal length 4 symbols</span>
                <input placeholder={"Enter your name"} type={"text"}/>
            </div>
            <div className={email.join(' ')}>
                <span className={style.errorMessage}>Enter correct email</span>
                <input placeholder={"Enter your email"} type={"email"}/>
            </div>
            <div className={message.join(' ')}>
                <span className={style.errorMessage}>Enter correct message. Minimal length 30 symbols.</span>
                <textarea className={style.message} name="message" id=""/>
            </div>
            <span className={style.buttonWrap}>
                    <button type={"submit"} className={style.button}>{"Send Message"}</button>
                </span>
        </form>
    )
}

export default MessageForm;
