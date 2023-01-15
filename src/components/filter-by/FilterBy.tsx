import React, {FC} from 'react';
import {Box, Typography} from "@mui/material";
import FilterInput from "../input/FilterInput";


const FilterBy:FC = () => {
    return (
        <Box>
            <Typography sx={{ fontWeight: 600 }}>Filter by keywords</Typography>
            <FilterInput/>
        </Box>
    );
};

export default FilterBy;