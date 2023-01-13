import React from 'react';
import FilterBy from "../../filter-by/FilterBy";
import Results from "../../results/Results";
import Box from "@mui/material/Box";

const Main = () => {
    return (
        <Box
            sx={{
                margin: '50px 75px'
            }}>
            <FilterBy/>
            <Results/>
        </Box>
    );
};

export default Main;