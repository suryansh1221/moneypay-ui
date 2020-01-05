// import { combineReducers } from 'redux';

// const songsReducer = () => {
//     return [
//         {"title": "fsd","description": "Asd"},
//         {"title": "fsd","description": "Asd"},
//         {"title": "fsd","description": "Asd"}
//     ]
// }

// const selectedSongReducer = (selectedSong=null, action) => {
//     if(action.type === 'SONG_SELECTED')
//         return action.payload
//     return selectedSong
// }

// export default combineReducers({
//     songs: songsReducer,
//     selectedSong: selectedSongReducer
// });

import { combineReducers } from 'redux';
import authReducer from './authReducer'

export default combineReducers({
    auth: authReducer
})