import {createStore, applyMiddleware, combineReducers} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import {ArticleReducer} from "../reducers/ArticleReducer";
import {filterReducer} from "../reducers/FilterReducer";

const rootReducer = combineReducers({
    article: ArticleReducer,
    filter: filterReducer
})

export type rootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));