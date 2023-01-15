import React, {useEffect, useMemo} from 'react';
import Article from "./article/Article";
import {filterArray} from "../../utils/filterArray";
import {highlightText} from "../../utils/highlightText";
import {useDispatch} from "react-redux";
import {changeFilteredArrayLength} from "../../redux/reducers/FilterReducer";

interface ArticlesWFProps {
    articles: any[],
    filter: string
}

const ArticlesWithFilter: React.FC<ArticlesWFProps> = ({articles, filter}:ArticlesWFProps) => {
    const dispatch = useDispatch();
    const filteredArray = useMemo(() => {
        return filterArray(articles, filter);
    }, [articles, filter])

    useEffect(() => {
        dispatch(changeFilteredArrayLength(filteredArray.flat().length));
    }, [filteredArray])

    return (
        <>
            {Array.from(filteredArray)[0]
                .map(article =>
                    <Article key={article.id} id={article.id} img={article.imageUrl}
                             title={highlightText(article.title, filter)}
                             summary={article.summary} date={article.updatedAt}/>
            )}
            {Array.from(filteredArray)[1]
                .map(article =>
                    <Article key={article.id} id={article.id} img={article.imageUrl} title={article.title}
                             summary={highlightText(article.summary, filter)} date={article.updatedAt}/>
                )}
        </>
    );
};

export default React.memo(ArticlesWithFilter);