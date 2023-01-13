import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {useNavigate, useParams} from "react-router-dom";
import {fetchArticles} from "../../../redux/action-creators/fetchArticles";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import Box from "@mui/material/Box";
import './ArticlePage.css'
import ArticlePaper from "./ArticlePaper";
import {Typography} from "@mui/material";
import WestIcon from '@mui/icons-material/West';
import EastIcon from "@mui/icons-material/East";
import Button from "@mui/material/Button";


const ArticlePage: React.FC = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const {articles, loading, error} = useTypedSelector(state => state.article);
    const article: any = articles;
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(fetchArticles(params.id));
    }, [])

    return (
        <Box>
            <img src={article.imageUrl} alt="article" className={'article-page-img'}/>
            <ArticlePaper
                summary={article.summary}
                title={article.title}
            />

            <Button
                onClick={() => navigate(`/`)}
                size="small"
                sx={{
                    color: '#363636',
                    fontSize: '16px',
                    fontWeight: '600',
                    height: '24px',
                    padding: '0',
                    position: 'absolute',
                    bottom: '45px',
                    left: '150px',
                    textTransform: 'initial',
                    marginLeft: '6px'
                }}>
                <WestIcon
                    sx={{
                        fontSize: '12px',
                        marginRight: '6px'
                    }}
                />
                Back to homepage
            </Button>
        </Box>
    );
};

export default ArticlePage;