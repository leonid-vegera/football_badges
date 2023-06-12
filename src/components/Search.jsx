import React from 'react';
import { TextField } from '@mui/material';

const Search = ({ value, onChange }) => {
  return (
    <TextField
      id="outlined-search"
      label="Пошук"
      type="search"
      variant="standard"
      fullWidth
      sx={{ mb: '1rem' }}
      value={value}
      onChange={onChange}
    />
  )
}

export default Search;