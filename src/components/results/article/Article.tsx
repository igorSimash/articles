import React, {ReactFragment, useMemo} from 'react';
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
import {useNavigate} from "react-router-dom";

interface ArticleProps {
    img: string,
    title: string | ReactFragment,
    summary: string | ReactFragment,
    date: string,
    id: number
}

const Article: React.FC<ArticleProps> = ({img, title, summary, date, id}: ArticleProps) => {

    const validDate = useMemo(() => {return getValidDate(date)}, [date]);
    const navigate = useNavigate();

    return (
        <Card sx={{
            width: '400px',
            height: '530px',
            position: 'relative',
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
                >
                    {title}
                </Typography>
                <Typography
                    variant="body2"
                    component={'p'}
                    color="text.secondary"
                    className={'article-summary'}
                    sx={{
                        marginTop: '20px'
                    }}
                >
                    {summary}
                </Typography>
            </CardContent>
            <Button
                onClick={() => navigate(`/${id}`)}
                size="small"
                sx={{
                    color: 'black',
                    fontSize: '16px',
                    fontWeight: '700',
                    height: '24px',
                    // margin: '12px 25px 25px 25px',
                    position: 'absolute',
                    bottom: '25px', left: '25px',
                    padding: '0',
                    textTransform: 'initial'
                }}>
                Read More
                <EastIcon
                    sx={{
                        fontSize: '12px',
                        marginLeft: '6px'
                    }}
                />
            </Button>
        </Card>
    );
};

export default React.memo(Article);