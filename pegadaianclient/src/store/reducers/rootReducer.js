import { items, itemsHaveError, itemsAreLoading } from './projectReducer'
import authReducer from './authReducer'
import dataReducer from './dataReducer'
import filterReducer from './filterReducer'

import {combineReducers} from 'redux'
import pemasaranReducer from './pemasaranReducer';
import kirimReducer from './kirimReducer';

const rootReducer = combineReducers({
    items,
    itemsAreLoading,
    itemsHaveError,
    auth : authReducer,
    data : dataReducer,
    filter : filterReducer,
    pemasaran : pemasaranReducer,
    kirim : kirimReducer
})

export default rootReducer