import { Box, TextField, InputAdornment, IconButton } from "@mui/material"
import { useState } from "react";
 
const SearchBar = ({ searchData }) => {
  const [newWord, setNewWorld] = useState('');
  const [error, setError] = useState(false);

  const style = {
  "& .MuiOutlinedInput-root": {
    borderRadius: '16px',
    boxShadow: 2,
    bgcolor: `${searchData.themeMode && '#1F1F1F' || '#F4F4F4'}`,
    "&.Mui-focused fieldset": {
      borderColor: "#A445ED"
    },
    "&:hover fieldset": {
      borderColor: "#A445ED"
    }
  }
}
  
  const handleChange = (e) => {
    setNewWorld(e.target.value);
    setError(false);
  }

  const handleSearch = (e) => {
    e.preventDefault();
    const searchWord = newWord === '' ? setError(true) : searchData.fetchWord(newWord);
    setNewWorld('');
    return searchWord;
  }

  return (
    <Box component="form"  
      noValidate
      autoComplete="off"
      className="w-full flex items-center mt-6 rounded-2xl"
      onSubmit={handleSearch}
    >
      
      <TextField
        name="search"
        placeholder="Search for any word…"
        value={newWord}
        onChange={handleChange}
        InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton type="submit">
              <Box 
                component='img'
                alt="search"
                src="/assets/images/icon-search.svg"
                className="w-5 h-5"
              />
            </IconButton>  
          </InputAdornment>
        ),
        }}
        variant="outlined"
        error={error}
        helperText={error && "Whoops, can’t be empty…"}
        size="small"
        required
        fullWidth
        sx={style}
      />
    
    </Box>
  )
}

export default SearchBar
