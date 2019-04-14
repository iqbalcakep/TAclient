
import {itemsHaveError,itemsAreLoading,itemsFetchDataSuccess} from './items'
import axios from 'axios'

export function itemsFetchData(url) {
    return (dispatch) => {
        dispatch(itemsAreLoading(true));

        axios.get(url)
            .then((response) => {
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }

                dispatch(itemsAreLoading(false));

                return response;
            })
            .then((response) => dispatch(itemsFetchDataSuccess(response.data)))
            .catch(() => dispatch(itemsHaveError(true)));
    };
}



