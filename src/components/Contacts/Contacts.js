import React from 'react';
import MessageForm from "../MessageForm/MessageForm";
import data from "../../data/contact-info/contactInfo.json"
import style from './style.css';

const Contacts = () => {
    const createContacts = () => {
        return Object.keys(data.contacts).map((item, index) => {
            return (
                <p key={index}>
                    <strong className={style.contactTitle}>{item + ': '}</strong>
                    <span>{data.contacts[item]}</span>
                </p>
            )
        })
    }

    return (
        <React.Fragment>
            <div className={style.contactsWrapper}>
                <div className={style.info}>
                    <h3>{data.title}</h3>
                    <p>{data.text}</p>
                    {createContacts()}
                </div>
                <MessageForm/>
            </div>
            <div className={style.mapWrapper}>
                <iframe className={style.map}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d81025.28822961795!2d26.109893302493017!3d50.60778948345725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472f6cbd89bd747b%3A0xa4f7863ba5e0e826!2z0LLRg9C70LjRhtGPINCf0LDQstC70Y7Rh9C10L3QutCwLCAxNiwg0KDRltCy0L3QtSwg0KDRltCy0L3QtdC90YHRjNC60LAg0L7QsdC70LDRgdGC0YwsIDMzMDE3!5e0!3m2!1suk!2sua!4v1605477560244!5m2!1suk!2sua"
                        frameBorder="0" allowFullScreen="" aria-hidden="false"
                        tabIndex="0"/>
            </div>
        </React.Fragment>
    )
}

export default Contacts;
