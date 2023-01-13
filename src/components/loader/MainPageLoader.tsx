import React from 'react';
import {Typography} from "@mui/material";
import Loader from "./Loader";

const MainPageLoader: React.FC = () => {
    return (
        <div>
            <Typography
                sx={{ fontWeight: 600,
                    borderBottom: '1px solid #EAEAEA',
                    marginBottom: '20px'
                }}>
                Results: ...
            </Typography>
            <Loader/>
        </div>
    );
};

export default MainPageLoader;