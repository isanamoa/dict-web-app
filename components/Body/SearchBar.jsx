import { Box, TextField, InputAdornment, IconButton } from "@mui/material"
const style = {
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "#A445ED"
    },
    "&:hover fieldset": {
      borderColor: "transparent"
    }
  }
} 
const SearchBar = () => {

  return (
    <Box component="form"  
      noValidate
      autoComplete="off"
      className="w-full flex mt-6 bg-transparent"
      onSubmit={(e)=> {
          e.preventDefault();
          console.log('Love')
        }
      }
    >
      
      <TextField
        name="search"
        placeholder="Search for any word…"
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
        error={false}
        helperText="Whoops, can’t be empty…"
        size="small"
        required
        fullWidth
        sx={style}
      />
    
    </Box>
  )
}

export default SearchBar
