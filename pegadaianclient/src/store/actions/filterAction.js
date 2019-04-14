import axios from 'axios'
import { func } from 'prop-types';



export function filter_error(bool) {
    return {
        type: 'FILTER_ERROR',
        hasError: bool
    };
}

function filter_loading(bool) {
    return {
        type: 'FILTER_LOADING',
        isLoading: bool
    };
}

export function filter_sukses(data) {
    return {
        type: 'FILTER_SUKSES',
        data
    };
}


export  function filterAction(jarak,alamat) {
    return (dispatch) => {
        dispatch(filter_loading(true));

        axios.post("http://127.0.0.1:8090/api/robot/getJarak",{
            alamat:alamat,
        })
            .then((response) => {
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }

                dispatch(filter_loading(false));

                return response;
            })
            .then(response => {
            var baru = parseInt(jarak);
           var filtered = response.data.filter(r=>{
                    return (r.jarak <= baru);
            });
           dispatch(filter_sukses(filtered))

            })
            .catch(() => dispatch(filter_error(true)));
    };
}

export function filterDetail(isi,alamat,jarak){
    return (dispatch) => {
        dispatch(filter_loading(true));

        axios.post("http://127.0.0.1:8090/api/robot/getJarak",{
            alamat:alamat,
        })
            .then((response) => {
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }

                dispatch(filter_loading(false));

                return response;
            })
            .then(response => {
            var baru = parseInt(jarak);
           var filtered = response.data.filter(r=>{
               if(isi!=="semua"){
                    return (r.jarak <= baru && r.skala_usaha.toLowerCase() === isi);
               }else{
                return (r.jarak <= baru)
               }
            });
           dispatch(filter_sukses(filtered))

            })
            .catch(() => dispatch(filter_error(true)));
    };
}


