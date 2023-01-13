import React, {FC, useEffect} from 'react';
import {Box, Typography} from "@mui/material";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {fetchArticles} from "../../redux/action-creators/fetchArticles";
import {useDispatch} from "react-redux";
import Article from "./article/Article";
import MainPageLoader from "../loader/MainPageLoader";
import ArticlesWithoutFilter from "./ArticlesWithoutFilter";
import ArticlesWithFilter from "./ArticlesWithFilter";

const Results: FC = () => {
    const {articles, loading, error} = useTypedSelector(state => state.article);
    const filter = useTypedSelector(state => state.filter.filterText);
    const dispatch = useDispatch();
    console.log(articles);

    useEffect(() => {
        dispatch(fetchArticles())
    }, [dispatch]);

    if(loading)
        return <MainPageLoader/>

    if(error)
        console.error(error)

    return (
        <Box>
            <Typography
                sx={{ fontWeight: 600,
                    borderBottom: '1px solid #EAEAEA'
            }}>
                Results: {articles.length}
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
                {
                    filter
                        ?
                        <ArticlesWithFilter articles={articles} filter={filter}/>
                        :
                        <ArticlesWithoutFilter articles={articles}/>

                }


            </Box>
        </Box>
    );
};

export default Results;