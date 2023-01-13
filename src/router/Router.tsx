import React from 'react';
import Main from "../components/pages/main/Main";
import ArticlePage from "../components/pages/article-page/ArticlePage";
import {createBrowserRouter} from "react-router-dom";



export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Main />,
        },
        {
            path: '/:id',
            element: <ArticlePage />
        }
    ]
);