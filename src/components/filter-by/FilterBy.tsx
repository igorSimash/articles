import React, {FC} from 'react';
import './FilterBy.css'
import {Box, Typography} from "@mui/material";
import FilterInput from "../input/FilterInput";


const FilterBy:FC = () => {
    return (
        <Box>
            <Typography sx={{ fontWeight: 600 }}>Filter by keywords</Typography>
            <FilterInput/>
            {/*<TextField*/}
            {/*   className={'textField'}*/}
            {/*   InputProps={{*/}
            {/*       startAdornment: (*/}
            {/*           <InputAdornment position="start">*/}
            {/*               <SearchIcon*/}
            {/*                    sx={{*/}
            {/*                        fontSize: '28px'*/}
            {/*                    }}/>*/}
            {/*           </InputAdornment>*/}
            {/*       ),*/}
            {/*   }}*/}
            {/*/>*/}
        </Box>
    );
};

export default FilterBy;