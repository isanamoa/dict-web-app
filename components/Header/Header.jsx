import { Box, Switch, FormControl, 
    InputLabel, MenuItem, Select  } from "@mui/material"


const Header = ({ headData }) => {
    const {themeMode, dfont, handleThemeChange, handleFontChange } = headData
  return (
    <Box className="w-full flex justify-between items-center">
      
      <Box 
        component='img'
        alt="book"
        src="/assets/images/logo.svg"
        className="w-7 h-8"
      />

      <Box className="flex gap-1 items-center justify-between">
        <Box>
            <FormControl size="small" className="w-20 h-9 p-0 sm:w-32 m-1 text-[0.875rem]">
                <InputLabel id="font-label">Font</InputLabel>
                <Select
                    labelId="font-label"
                    value={dfont}
                    label="Font"
                    onChange={handleFontChange}
                    size="small"                    
                >
                    <MenuItem value={'sans'}>San-Serif</MenuItem>
                    <MenuItem value={'serifs'}>Serif</MenuItem>
                    <MenuItem value={'mono'}>Mono</MenuItem>
                </Select>
            </FormControl>
        </Box>
        
        <Box className="flex gap-0 items-center justify-between">
            <Switch color="secondary" onClick={handleThemeChange}/>
            {
                !themeMode && 
                <Box 
                    component='img'
                    alt="moon"
                    src="/assets/images/icon-moon.svg"
                    className="w-5 h-5"
                />
            }
        </Box>
      </Box>
    </Box>
  )
}

export default Header
