import { Box, TextField, InputAdornment, IconButton } from "@mui/material"
//import useDictionary from "@/api/useDictionary";
import { useState } from "react";


const style = {
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "#A445ED"
    },
    "&:hover fieldset": {
      borderColor: "#A445ED"
    }
  }
} 
const SearchBar = ({ searchData }) => {
  const [newWord, setNewWorld] = useState('');
  const [error, setError] = useState(false);

  //const dictionaryData = useDictionary();
  //const { fetchWord } = dictionaryData;
  
  const handleChange = (e) => {
    setNewWorld(e.target.value);
  }

  const handleSearch = (e) => {
    e.preventDefault();
    return newWord === '' ? setError(true) : searchData.fetchWord(newWord);
  }


  return (
    <Box component="form"  
      noValidate
      autoComplete="off"
      className="w-full flex items-center mt-6 bg-transparent"
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
