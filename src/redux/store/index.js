import {createStore, combineReducers} from 'redux';
import resultadoReducer from './Projects/reduce'

// creacion de los reducers
const myReducers = combineReducers({
    resultadoReducer
});

export default ()=> {
    return {
        ...createStore(myReducers, window._REDUX_DEVTOOLS_EXTENSION__ && Window.__REDUX_DEVTOOLS_EXTENSION__())
    }
}