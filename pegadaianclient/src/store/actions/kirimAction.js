import axios from 'axios'


export function kirim_error(bool) {
    return {
        type: 'KIRIM_ERROR',
        hasError: bool
    };
}

function kirim_loading(bool) {
    return {
        type: 'KIRIM_LOADING',
        isLoading: bool
    };
}

export function kirim_sukses(kirimStatus) {
    return {
        type: 'KIRIM_SUKSES',
        kirimStatus
    };
}



export function kirim(nama,pesan) {
    return (dispatch) => {        
            dispatch(kirim_loading(true));

            axios.post("http://127.0.0.1:8090/api/robot/kirim",{
                nama:nama,
                pesan:pesan
            })
                .then((response) => {
                    if (response.status !== 200) {
                        throw Error(response.statusText);
                    }
    
                    dispatch(kirim_loading(false));
    
                    return response;
                })
                .then(response => {
               dispatch(kirim_sukses(response.data))
    
                })
                .catch(() => dispatch(kirim_error(true)));
        }
        
       
}



