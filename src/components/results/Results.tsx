import React, {FC, useEffect} from 'react';
import {Box, Typography} from "@mui/material";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {fetchArticles} from "../../redux/action-creators/fetchArticles";
import {useDispatch} from "react-redux";
import MainPageLoader from "../loader/MainPageLoader";
import ArticlesWithoutFilter from "./ArticlesWithoutFilter";
import ArticlesWithFilter from "./ArticlesWithFilter";

const Results: FC = () => {
    const {articles, loading, error} = useTypedSelector(state => state.article);
    const filteredArrayLength = useTypedSelector(state => state.filter.filteredArrayLength)
    const filter = useTypedSelector(state => state.filter.filterText);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchArticles())
    }, []);

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
                Results: {filter.length > 0 ? filteredArrayLength : articles.length}
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

                    filter.length > 0
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