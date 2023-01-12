import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CalendarMonthTwoToneIcon from '@mui/icons-material/CalendarMonthTwoTone';

interface ArticleProps {
    img: string,
    title: string,
    summary: string,
    date: string
}

const Article: React.FC<ArticleProps> = ({img, title, summary, date}: ArticleProps) => {
    return (
        <Card sx={{
            width: 400,
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
                        {date}
                    </Typography>
                </Box>
                <Typography
                    variant="h5"
                    component="div"
                    sx={{
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                        height: '58px',
                        whiteSpace: 'nowrap'
                    }}>
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {summary}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    size="small"
                    sx={{
                        color: 'black',
                        fontSize: '16px',
                        fontWeight: '700'
                    }}>
                        Read More
                </Button>
            </CardActions>
        </Card>
    );
};

export default Article;