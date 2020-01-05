// export const selectSong = (song) => {
//     return {
//         type: 'SONG_SELECTED',
//         payload: song
//     }
// }
import axios from 'axios'
export const signIn = data => {
    return async dispatch => {
        try{
            const res = await axios.post(`http://10.139.154.223:3004/login`, {"name":data.name, "password":data.password}, {
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                }
            })
            // console.log(res.data.data)
            dispatch({type: 'SIGN_IN',payload: res.data})
        }catch(err){
            return (err)
        }
    }
}