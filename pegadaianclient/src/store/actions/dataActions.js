import axios from 'axios'

export function data_error(bool) {
    return {
        type: 'DATA_ERROR',
        hasError: bool
    };
}

export function data_loading(bool) {
    return {
        type: 'DATA_LOADING',
        isLoading: bool
    };
}

export function data_sukses(data) {
    return {
        type: 'DATA_SUKSES',
        data
    };
}


export function getData() {
    return (dispatch) => {
        dispatch(data_loading(true));
        axios.get("http://127.0.0.1:8090/api/orang")
            .then((response) => {
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }

                dispatch(data_loading(false));
                return response;
            })
            .then(async response => {
            await dispatch(data_sukses(response.data))

            })
            .catch(() => dispatch(data_error(true)));
    };
}

export function addData(credentials) {
    return (dispatch) => {
        dispatch(data_loading(true));

        axios.post("http://127.0.0.1:8090/api/orang",{
            nama :credentials.nama,
            alamat:credentials.alamat,
            kecamatan:credentials.kecamatan,
            kelurahan:credentials.kelurahan,
            lat:credentials.lat,
            long:credentials.long,
            kategori_usaha:credentials.kategori_usaha,
            skala_usaha:credentials.skala_usaha,
            nohp:credentials.nohp,
        })
            .then((response) => {
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }

                dispatch(data_loading(false));

                return response;
            })
            .then(async response => {
            await dispatch(data_sukses(response.data))

            })
            .catch(() => dispatch(data_error(true)));
    };
}

export function delData(id){
    return (dispatch) => {
        dispatch(data_loading(true));
        axios.delete("http://127.0.0.1:8090/api/orang/"+id)
            .then((response) => {
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }

                dispatch(data_loading(false));

                return response;
            })
            .then(async response => {
            await dispatch(data_sukses(response.data))

            })
            .catch(() => dispatch(data_error(true)));
    };

}