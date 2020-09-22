const { default: Component } = require("../actions");

import {combineReducers}  from 'redux'

const selectedSongReducer = (selectedsong = null ,action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }
    return selectedsong
}

export default selectedSongReducer
