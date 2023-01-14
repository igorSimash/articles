import {createStore, applyMiddleware, combineReducers} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import {ArticleReducer} from "../reducers/ArticleReducer";
import {filterReducer} from "../reducers/FilterReducer";
import {CurrentArticleReducer} from "../reducers/CurrentArticleReducer";

const rootReducer = combineReducers({
    article: ArticleReducer,
    filter: filterReducer,
    currentArticle: CurrentArticleReducer
})

export type rootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));