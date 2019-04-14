const initState={
    loading : false,
    error : false,
    isAuthenticated : false,
    data : null
}

const authReducer = (state = initState, action) =>{
    switch (action.type) {
        case "LOGIN_ERROR":
            console.log("LOGIN ERROR")
            return{
                error : true,
                loading: false,
                
            }
        case "LOGIN_LOADING":
        console.log("LOGIN LOADING")
            return{
                ...state,
                error : false,
                loading : true
            }
         case "logout_sukses":
            return{
                ...state,
             isAuthenticated : false,
                data : null
            }
        case "LOGIN_SUKSES":
        console.log("LOGIN SUKSES")
        return{
            ...state,
            error : false,
            loading : false,
            isAuthenticated:true,
            data : action.data
        }
        default:
        return state
    }
}

export default authReducer