interface FetchArticleAction {
    type: ArticleActionType.FETCH_ARTICLES,

}

interface FetchArticleSuccessAction {
    type: ArticleActionType.FETCH_ARTICLES_SUCCESS,
    payload: any[]

}

interface FetchArticleErrorAction {
    type: ArticleActionType.FETCH_ARTICLES_ERROR,
    payload: string
}

export interface ArticleState {
    articles: any[]
    loading: boolean,
    error: null | string
}

export enum ArticleActionType {
    FETCH_ARTICLES = 'FETCH_ARTICLES',
    FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS',
    FETCH_ARTICLES_ERROR = 'FETCH_ARTICLES_ERROR',
}

export type ArticleAction =
    FetchArticleAction |
    FetchArticleSuccessAction |
    FetchArticleErrorAction;
