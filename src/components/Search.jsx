import React from 'react';
import {InputAdornment, TextField} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {Message} from '../services/lang/messages'

const Search = ({value, onChange}) => {
  return (
    <TextField
      id="outlined-search"
      label={Message.Service.Search}
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
