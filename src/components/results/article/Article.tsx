import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';
import EastIcon from '@mui/icons-material/East';
import './Article.css'
import {getValidDate} from "../../../utils/Date";

interface ArticleProps {
    img: string,
    title: string,
    summary: string,
    date: string
}

const Article: React.FC<ArticleProps> = ({img, title, summary, date}: ArticleProps) => {

    const validDate = getValidDate(date);

    return (
        <Card sx={{
            width: '400px',
            height: 530
        }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="217"
                image={img}
            />
            <CardContent
                sx={{
                    padding: '25px 25px 20px 25px'
                }}>
                <Box
                    sx={{
                        marginBottom: '24px',
                        display: 'flex',
                        gap: '9.33px',
                        alignItems: 'center'
                    }}>
                    <CalendarMonthTwoToneIcon
                        sx={{
                            fontSize: '16px'
                        }}
                    />
                    <Typography
                        component="span"
                        color={'#363636'}
                        sx={{
                            fontSize: '14px'
                        }}>
                        {validDate}
                    </Typography>
                </Box>
                <Typography
                    variant="h5"
                    component="h5"
                    className={'article-title'}
                    sx={{
                        marginBottom: '20px'
                    }}
                    >
                    {title}
                </Typography>
                    <Typography
                        variant="body2"
                        component={'p'}
                        color="text.secondary"
                        className={'article-summary'}
                    >
                        {summary}
                    </Typography>
            </CardContent>
            <Button
                size="small"
                sx={{
                    color: 'black',
                    fontSize: '16px',
                    fontWeight: '700',
                    margin: '0 25px 25px 25px',
                    padding: '0'
                }}>
                    Read More
                    <EastIcon/>
            </Button>
        </Card>
    );
};

export default Article;