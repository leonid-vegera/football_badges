import React from 'react';
import {InputAdornment, TextField} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Search = ({value, onChange}) => {
    return (
        <TextField
            id="outlined-search"
            label="Пошук"
            type="search"
            variant="standard"
            fullWidth
            sx={{mb: '1rem'}}
            value={value}
            onChange={onChange}
            InputProps={{
                readOnly: false,
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon/>
                    </InputAdornment>
                )
            }}
        />
    )
}

export default Search;
