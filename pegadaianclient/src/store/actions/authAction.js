import axios from 'axios'
import setAuth from '../../components/utils/setAuth'
import jwt from 'jsonwebtoken'


export function login_error(bool) {
    return {
        type: 'LOGIN_ERROR',
        hasError: bool
    };
}

function login_loading(bool) {
    return {
        type: 'LOGIN_LOADING',
        isLoading: bool
    };
}

export function login_sukses(data) {
    return {
        type: 'LOGIN_SUKSES',
        data
    };
}

export function logoutaction(){
    return(dispatch)=>{
    localStorage.removeItem('jwtToken');
    setAuth(false);
    dispatch({type:'logout_sukses'})
    }
}

export function login(credentials) {
    return (dispatch) => {
        dispatch(login_loading(true));

        axios.post("http://127.0.0.1:8090/api/pegadaian/login",{
            username:credentials.username,
            password:credentials.password
        })
            .then((response) => {
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }

                dispatch(login_loading(false));

                return response;
            })
            .then(response => {
           localStorage.setItem("jwtToken",response.data.token)
           setAuth(response.data.token)
           dispatch(login_sukses(jwt.decode(response.data.token)))

            })
            .catch(() => dispatch(login_error(true)));
    };
}


