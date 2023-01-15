import {ArticleAction, ArticleActionType} from "../../types/Article";
import {Dispatch} from "redux";
import axios from "axios";
import {CurrArticleActionType, CurrentArticleAction} from "../../types/CurrentArticle";

export const fetchArticles = (): any => {
    return async (dispatch: Dispatch<ArticleAction>) => {
        try {
            dispatch({type: ArticleActionType.FETCH_ARTICLES})
            const res = await axios.get(`https://api.spaceflightnewsapi.net/v3/articles/`);
            dispatch({type: ArticleActionType.FETCH_ARTICLES_SUCCESS,
                payload: res.data})
        }
        catch (err) {
            dispatch({type: ArticleActionType.FETCH_ARTICLES_ERROR,
                payload: 'Error in fetching articles'})
        }
    }
}

export const fetchCurrentArticle = (articleId: string | undefined): any => {
    return async (dispatch: Dispatch<CurrentArticleAction>) => {
        try {
            dispatch({type: CurrArticleActionType.FETCH_CURR_ARTICLES})
            const res = await axios.get(`https://api.spaceflightnewsapi.net/v3/articles/${articleId}`);
            dispatch({type: CurrArticleActionType.FETCH_CURR_ARTICLES_SUCCESS,
                payload: res.data})
        }
        catch (err) {
            dispatch({type: CurrArticleActionType.FETCH_CURR_ARTICLES_ERROR,
                payload: 'Error in fetching articles'})
        }
    }
}