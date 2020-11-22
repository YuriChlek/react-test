import {SHOW_POPUP, HIDE_POPUP} from "./actionTypes"

export function show(index) {
    return {
        type: SHOW_POPUP
    }
}

export function hide() {
    return {
        type: HIDE_POPUP
    }
}