const initState={
    loading : false,
    error : false,
    kirimStatus:null
}

const kirimReducer = (state = initState, action) =>{
    switch (action.type) {
        case "KIRIM_ERROR":
            return{
                error : true,
                loading: false,
                
            }
        case "KIRIM_LOADING":
            return{
                ...state,
                error : false,
                loading : true
            }
        case "KIRIM_SUKSES":
        return{
            ...state,
            error : false,
            loading : false,
            kirimStatus : action.kirimStatus
        }
        default:
        return state
    }
}

export default kirimReducer