import axios from 'axios'

export function pemasaran_error(bool) {
    return {
        type: 'PEMASARAN_ERROR',
        hasError: bool
    };
}

export function pemasaran_loading(bool) {
    return {
        type: 'PEMASARAN_LOADING',
        isLoading: bool
    };
}

export function loading(bool){
    return{
    type: 'LOADING',
    isLoading: bool
    };
}

export function error(bool){
    return{
    type: 'ERROR',
    isError: bool
    };
}

export function pemasaran_sukses(pemasaran) {
    return {
        type: 'PEMASARAN_SUKSES',
        pemasaran
    };
}

export function browser_sukses(browser){
    return {
        type: 'BROWSER_SUKSES',
        browser
    };  
}


export function browser_isOpen(bool) {
    return {
        type: 'BROWSER_ISOPEN',
        isOpen: bool
    };
}

export function wa_sukses(wa){
    return {
        type: 'WA_SUKSES',
        wa
    };  
}

export function cek_sukses(cekurl){
    return {
        type: 'CEK_SUKSES',
        cekurl
    };  
}

export function bukaBrowser(){
    return (dispatch) => {
        dispatch(loading(true));
        axios.get("http://127.0.0.1:8090/api/robot/browser")
        .then((response)=>{
            if (response.status !== 200) {
                throw Error(response.statusText);
            }

            dispatch(loading(false));
            return response;
        })
        .then((response)=>{
            console.log(response)
            dispatch(browser_sukses(response.data))
        }).catch(()=> dispatch(error(true)))
    }
}


export function tutupBrowser(){
    return (dispatch) => {
        dispatch(loading(true));
        axios.get("http://127.0.0.1:8090/api/robot/tutup_browser")
        .then((response)=>{
            if (response.status !== 200) {
                throw Error(response.statusText);
            }

            dispatch(loading(false));
            return response;
        })
        .then((response)=>{
            console.log(response)
            dispatch(browser_sukses(response.data))
        }).catch(()=> dispatch(error(true)))
    }
}

export function buakwa(){
    return (dispatch) => {
        dispatch(loading(true));
        axios.get("http://127.0.0.1:8090/api/robot/wa")
        .then((response)=>{
            if (response.status !== 200) {
                throw Error(response.statusText);
            }

            dispatch(loading(false));
            return response;
        })
        .then((response)=>{
            console.log(response)
            dispatch(wa_sukses(response.data.url))
        }).catch(()=> dispatch(error(true)))
    }
}

export function cekurl(){
    return (dispatch) => {
        dispatch(loading(true));
        axios.get("http://127.0.0.1:8090/api/robot/cek")
        .then((response)=>{
            if (response.status !== 200) {
                throw Error(response.statusText);
            }

            dispatch(loading(false));
            return response;
        })
        .then((response)=>{
            dispatch(cek_sukses(response.data))
        }).catch(()=> dispatch(error(true)))
    }
}




