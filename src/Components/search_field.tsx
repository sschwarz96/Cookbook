"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import {useState} from "react";


const SearchInput = () => {
    const [inputValue, setInputValue] = useState('');

    // Handler for input change
    const handleInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setInputValue(event.target.value);
    };

    // Clear the input field
    const handleClearInput = () => {
        setInputValue('');
    };

    return (
        <Box className="w-1/4 pl-10" sx={{'& > :not(style)': {m: 1}}}>
            <FormControl variant="standard">
                <Input
                    id="input-with-icon-adornment"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Search..."
                    startAdornment={
                        <InputAdornment position="start">
                            <SearchIcon/>
                        </InputAdornment>
                    }
                    endAdornment={
                        inputValue && (
                            <InputAdornment position="end"
                                            onClick={handleClearInput}>
                                <ClearIcon/>
                            </InputAdornment>
                        )
                    }
                />
            </FormControl>
        </Box>
    );
};

export default SearchInput;