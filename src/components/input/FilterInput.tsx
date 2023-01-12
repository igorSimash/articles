import React, {FC} from 'react';
import './FilterInput.css'

interface FilterInputProps {
    onChange?: Function,
    value?: string
}

const FilterInput:FC<FilterInputProps> = ({onChange, value}:FilterInputProps) => {
    return (
        <input
            className={'filter-input'}
            value={value}
            // onChange={onChange}
        />
    );
};

export default FilterInput;