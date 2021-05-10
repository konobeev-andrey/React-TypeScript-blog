import {applyMiddleware, combineReducers, createStore} from 'redux'
import ThinkMiddleware from 'redux-thunk'
import postsReducer from "./postsRedusers";
import { composeWithDevTools } from 'redux-devtools-extension';
import postReducer from "./postRedusers";
import messageWindow from "./messageWindowRedusers";
// import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers({
    posts: postsReducer,
    post: postReducer,
    // form: formReducer,
    messageWindow: messageWindow,
});
type ReducersType = typeof reducers;
export type StateType = ReturnType<ReducersType>


const store = createStore(reducers, composeWithDevTools (applyMiddleware(ThinkMiddleware)));

export default store;