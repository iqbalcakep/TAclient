const initState={
    loading : false,
    error : false,
    data : null
}

const authReducer = (state = initState, action) =>{
    switch (action.type) {
        case "FILTER_ERROR":
            console.log("FILTER ERROR")
            return{
                error : true,
                loading: false,
                
            }
        case "FILTER_LOADING":
        console.log("FILTER LOADING")
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
        case "FILTER_SUKSES":
        console.log("FILTER SUKSES")
        return{
            ...state,
            error : false,
            loading : false,
            data : action.data
        }
        default:
        return state
    }
}

export default authReducer