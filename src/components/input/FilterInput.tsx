import React, {FC} from 'react';
import './FilterInput.css'
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {changeFilterText} from "../../redux/reducers/FilterReducer";
import SearchIcon from '@mui/icons-material/Search';
import Box from "@mui/material/Box";

const FilterInput:FC = () => {
    const dispatch = useDispatch();
    const text = useTypedSelector(state => state.filter.filterText)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(changeFilterText(e.target.value))
    }

    return (
        <Box
            sx={{
                position: 'relative',
                marginTop: '10px',
                marginBottom: '40px'
            }}
        >
            <SearchIcon
                sx={{
                    position: 'absolute',
                    inset: '12.5px 0 12.5px 20px',
                    fontSize: '25px'
                }}
            />
            <input
                className={'filter-input'}
                type="search"
                value={text}
                onChange={handleChange}
            />
        </Box>
    );
};

export default FilterInput;