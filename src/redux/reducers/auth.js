import { authAPI } from "../../api"

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
   userName: null,
   isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }
            
        default:
            return state
    }
}


export const login = (username, password) => (dispatch) => {
    authAPI.login(username, password).then(res => {
        if(res.status === 200) {
            dispatch()
        } else {

        }
    })
}