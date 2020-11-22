import React from "react"
import is from 'is_js';
import style from "./style.css"

const MessageForm = (props) => {
    const classes = [style.form],
          closeButton = [style.close, 'close'];

    if (props.classes) {
        classes.push(props.classes);
    }

    const validForm = (event) => {
        event.preventDefault();
        if (event.target[0].value.length < 4 || !is.email(event.target[1].value)) {
            console.log('Hi')
        }
    }

    return (
        <form className={classes.join(' ')} onSubmit={validForm}>
            {props.formTitle && <h3 className={style.formTitle}>{props.formTitle}</h3>}
            {props.close && <span className={closeButton.join(' ')}/>}
            <div className={style.inputWrapper}>
                <input placeholder={"Enter your name"} type={"text"}/>
            </div>
            <div className={style.inputWrapper}>
                <input placeholder={"Enter your email"} type={"email"}/>
            </div>
            <textarea className={style.message} name="message" id=""/>
            <span className={style.buttonWrap}>
                    <button type={"submit"} className={style.button}>{"Send Message"}</button>
                </span>
        </form>
    )
}

export default MessageForm;
