import React from "react"
import style from "./style.css"

const MessageForm = (props) => {
    return (
        <form className={style.form}>
            {props.formTitle && <h3 className={style.formTitle}>{props.formTitle}</h3>}
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
