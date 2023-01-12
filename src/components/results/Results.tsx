import React, {FC, useEffect} from 'react';
import {Box, Typography} from "@mui/material";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {fetchArticles} from "../../redux/action-creators/fetchArticles";
import {useDispatch} from "react-redux";
import Article from "./article/Article";

const Results: FC = () => {
    const {articles, loading, error} = useTypedSelector(state => state.article);
    const dispatch = useDispatch();
    console.log(articles);
    useEffect(() => {
        dispatch(fetchArticles())
    }, []);

    return (
        <Box>
            <Typography
                sx={{ fontWeight: 600,
                    borderBottom: '1px solid #EAEAEA'
            }}>
                Results: 6
            </Typography>
            <Box
                className=""
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                    rowGap: '45px',
                    marginTop: '45px',
                    justifyItems: "center"
            }}
                >
                {articles.map(article =>
                    <Article key={article.id} img={article.imageUrl} title={article.title}
                            summary={article.summary} date={article.updatedAt}/>
                )}

            </Box>
        </Box>
    );
};

export default Results;