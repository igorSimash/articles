import React, {ReactFragment} from 'react';
import Article from "./article/Article";
import {filterArray} from "../../utils/filterArray";

interface ArticlesWFProps {
    articles: any[],
    filter: string
}

function highlightText(text: string, filter: string):ReactFragment {
    const parts = text.split(new RegExp(`(${filter})`, "gi"));
    return parts.map((part, index) => (
        <React.Fragment key={index}>
            {part.toLowerCase() === filter.toLowerCase() ? (
                <span style={{ backgroundColor: "#FFF619" }}>{part}</span>
            ) : (
                part
            )}
        </React.Fragment>
    ));
}

const ArticlesWithFilter: React.FC<ArticlesWFProps> = ({articles, filter}:ArticlesWFProps) => {
    const filteredArray = filterArray(articles, filter);
    return (
        <>
            {Array.from(filteredArray)[0]
                .map(article =>
                    <Article key={article.id} id={article.id} img={article.imageUrl} title={highlightText(article.title, filter)}
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

export default ArticlesWithFilter;