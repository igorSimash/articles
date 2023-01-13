import React from 'react';
import {Paper} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface ArticlePaperProps {
    title: string,
    summary: string
}

const ArticlePaper: React.FC<ArticlePaperProps> = ({title, summary}: ArticlePaperProps) => {
    return (
        <Paper
            elevation={0}
            sx={{
                margin: '150px 75px 104px 75px',
                padding: '35px 75px 50px',
                position: 'absolute',
                inset: '0',
                boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.05)',
                border: '1px solid #EAEAEA'
            }}
        >
            <Box
                sx={{
                    marginBottom: '50px',
                    color: '#363636',
                    textAlign: 'center'
                }}
            >
                <Typography
                    component={'span'}
                >
                    {title}
                </Typography>
            </Box>
            <Box
            >
                <Typography
                    sx={{
                        color: '#000000',
                        lineHeight: '27px'
                    }}
                >
                    {summary}
                </Typography>
            </Box>
        </Paper>
    );
};

export default ArticlePaper;