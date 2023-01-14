interface FetchCurrArticleAction {
    type: CurrArticleActionType.FETCH_CURR_ARTICLES,
}

interface FetchCurrArticleSuccessAction {
    type: CurrArticleActionType.FETCH_CURR_ARTICLES_SUCCESS,
    payload: object

}

interface FetchCurrArticleErrorAction {
    type: CurrArticleActionType.FETCH_CURR_ARTICLES_ERROR,
    payload: string
}


export interface CurrArticleState {
    currentArticle: object,
    loading: boolean,
    error: null | string
}

export enum CurrArticleActionType {
    FETCH_CURR_ARTICLES = 'FETCH_CURR_ARTICLES',
    FETCH_CURR_ARTICLES_SUCCESS = 'FETCH_CURR_ARTICLES_SUCCESS',
    FETCH_CURR_ARTICLES_ERROR = 'FETCH_CURR_ARTICLES_ERROR',
}

export type CurrentArticleAction =
    FetchCurrArticleAction |
    FetchCurrArticleSuccessAction |
    FetchCurrArticleErrorAction;