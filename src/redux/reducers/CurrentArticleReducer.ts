import {CurrArticleState, CurrentArticleAction, CurrArticleActionType} from "../../types/CurrentArticle";

const defaultState: CurrArticleState = {
    currentArticle: {},
    loading: false,
    error: null
};


export const CurrentArticleReducer = (state = defaultState, action:CurrentArticleAction) : CurrArticleState => {
    switch (action.type) {
        case CurrArticleActionType.FETCH_CURR_ARTICLES:
            return { loading: true, error: null, currentArticle: {}}
        case CurrArticleActionType.FETCH_CURR_ARTICLES_SUCCESS:
            return { loading: false, error: null, currentArticle: action.payload}
        case CurrArticleActionType.FETCH_CURR_ARTICLES_ERROR:
            return { loading: false, error: action.payload, currentArticle: {}}
        default:
            return state
    }
}