import * as actionTypes from './actionTypes'
import axios from 'axios'



export const authStart = () => {
    return{
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = token => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token
    }
}

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const logout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('expirationDate')
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

const checkAuthtimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout)
        },expirationTime*1000)
    }
}

export const authLogin = (username, password) => {
    return dispatch => {
        dispatch(authStart())
        axios.post(`127.0.0.1:8000/rest-auth/login/`, {
            username: username,
            password: password
        }).then(res => {
            const token = res.data.key
            const expirationDate = new Date(new Date().getDate.Time() +3600 *1000)
            localStorage.setItem('token', token)
            localStorage.setItem('expirationDate',expirationDate)  
            dispatch(authSuccess(token))
            dispatch(checkAuthtimeout(3600))
        })
        .catch(error => {
            dispatch(authFail(error))
        })
    }
}


export const authSignup = (username, email, password1, password2) => {
    return dispatch => {
        dispatch(authStart())
        axios.post(`127.0.0.1:8000/rest-auth/registration/`, {
            username: username,
            email: email,
            password1: password1,
            password2: password2
        }).then(res => {
            const token = res.data.key
            const expirationDate = new Date(new Date().getDate.Time() +3600 *1000)
            localStorage.setItem('token',token)  
            localStorage.setItem('expirationDate',expirationDate)
            dispatch(authSuccess(token))
            dispatch(checkAuthtimeout(3600))
        })
        .catch(error => {
            dispatch(authFail(error))
        })
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token')
        if(token === undefined){
            dispatch(logout())
        } else {
            const expirationsDate = new Date(localStorage.getItem('expirationDate'))
            if(expirationsDate <= new Date()){
                dispatch(logout())
            } else {
                dispatch(authSuccess(token))
                dispatch(checkAuthtimeout( (expirationsDate.getTime() - new Date().getTime()/1000   )))
            }
        }
    }
}