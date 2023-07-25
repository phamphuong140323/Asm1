import { legacy_createStore as createStore, combineReducers } from 'redux'
import { productReducer } from '@/reducers/product';

const rootReducer = combineReducers({
    products: productReducer
})

const store = createStore(rootReducer);

export default store;