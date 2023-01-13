import React from 'react';
import Article from "./article/Article";

interface ArticlesWOFProps {
    articles: any[]
}

const ArticlesWithoutFilter: React.FC<ArticlesWOFProps> = ({articles}: ArticlesWOFProps) => {
    return (
        <>
            {Array.from(articles).map(article =>
                <Article key={article.id} id={article.id} img={article.imageUrl} title={article.title}
                         summary={article.summary} date={article.updatedAt}/>
            )}
        </>
    );
};

export default ArticlesWithoutFilter;