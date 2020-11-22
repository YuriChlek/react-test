import React from "react";
import style from './style.css'
import {connect} from "react-redux";
import {show, hide} from "../../store/actions/popup";

const Popup = (props) => {
    const classes = [style.contentWrapper, 'close'];
    if (props.showPopup){
        classes.push(style.active)
    }
    return(
        <div className={classes.join(' ')} onClick={(event) => {
            (event.target.classList.contains('close')) && props.hide();
            (props.additionalFunction) && props.additionalFunction();
        }}>
            {props.children}
        </div>
    )
}

function mapStateToProps(state){
    return {
        showPopup: state.popup.showPopup
    }
}

function mapDispatchToProps(dispatch){
    return{
        show: () => dispatch(show()),
        hide: () => dispatch(hide()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
