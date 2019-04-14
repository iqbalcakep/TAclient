const initState={
    loading : false,
    error : false,
    browserStatus : null,
    waurl: null,
    cekurl:null,
    kirimanStatus:null,
}

const pemasaranReducer = (state = initState, action) =>{
    switch (action.type) {
        case "ERROR":
            console.log("ERROR")
            return{
                error : true,
                loading: false,
            }
        case "LOADING":
        console.log("LOADING")
            return{
                ...state,
                error : false,
                loading : true
            }
        case "BROWSER_SUKSES":
        console.log(action.browser);
        return{
            ...state,
            error : false,
            loading : false,
            waurl : null,
            cekurl:null,
            browserStatus : action.browser
        }
        case "WA_SUKSES":
        console.log(action.wa);
        return{
            ...state,
            error : false,
            loading : false,
            waurl : action.wa
        }
        case "CEK_SUKSES":
        console.log(action.cekurl)
        return{
           
            ...state,
            error : false,
            loading : false,
            cekurl : action.cekurl
        }
        default:
        return state
    }
}

export default pemasaranReducer