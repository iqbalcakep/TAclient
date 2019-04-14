const initState={
    loading : false,
    error : false,
    data : null
}

const dataReducer = (state = initState, action) =>{
    switch (action.type) {
        case "DATA_ERROR":
            return{
                error : true,
                loading: false,
                
            }
        case "DATA_LOADING":
            return{
                ...state,
                error : false,
                loading : true
            }
        case "DATA_SUKSES":
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

export default dataReducer