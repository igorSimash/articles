import {ArticleAction, ArticleActionType} from "../../types/Article";
import {Dispatch} from "redux";
import axios from "axios";
// https://api.spaceflightnewsapi.net/v3/articles
export const fetchArticles = (articleId? :string): any => {
    return async (dispatch: Dispatch<ArticleAction>) => {
        try {
            dispatch({type: ArticleActionType.FETCH_ARTICLES})
            const res = await axios.get(`https://api.spaceflightnewsapi.net/v3/articles/${!articleId ? '' : articleId}`);
            dispatch({type: ArticleActionType.FETCH_ARTICLES_SUCCESS,
                payload: res.data})
        }
        catch (err) {
            dispatch({type: ArticleActionType.FETCH_ARTICLES_ERROR,
                payload: 'Error in fetching articles'})
        }
    }
}