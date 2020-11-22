import {SHOW_POPUP, HIDE_POPUP} from "../actions/actionTypes"

const initialState = {
    showPopup: false
}

export default function popupReducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_POPUP:{
            return {
                ...state,
                showPopup: true
            }
        }

        case HIDE_POPUP: {
            return {
                ...state,
                showPopup: false
            }
        }

        default:
            return state
    }
}
