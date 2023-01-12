import {ArticleAction, ArticleState, ArticleActionType} from "../../types/Article";

const defaultState: ArticleState = {
    articles: [],
    loading: false,
    error: null
};


export const ArticleReducer = (state = defaultState, action:ArticleAction) : ArticleState => {
    switch (action.type) {
        case ArticleActionType.FETCH_ARTICLES:
            return {loading: true, error: null, articles: []}
        case ArticleActionType.FETCH_ARTICLES_SUCCESS:
            return {loading: false, error: null, articles: action.payload}
        case ArticleActionType.FETCH_ARTICLES_ERROR:
            return {loading: false, error: action.payload, articles: []}
        default:
            return state
    }
}

