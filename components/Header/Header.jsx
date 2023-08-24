import { Box, Divider, 
     MenuItem, Select  } from "@mui/material"


const Header = ({ headData }) => {
    const {themeMode, dfont, handleThemeChange, handleFontChange } = headData;
    
  return (
    <Box className="w-full flex justify-between items-center">
      
      <Box 
        component='img'
        alt="book"
        src="/assets/images/logo.svg"
        className="w-[1.753rem] h-8 md:w-8 md:h-[2.281rem]"
      />

      <Box className="flex gap-1 items-center justify-between">
        <Box >
          <Select
              value={dfont}
              onChange={handleFontChange}
              size="small"  
              className="w-auto h-9 p-0 sm:w-32 m-1 text-[0.875rem]"                  
          >
              <MenuItem value={'sans'}>San-Serif</MenuItem>
              <MenuItem value={'serifs'}>Serif</MenuItem>
              <MenuItem value={'mono'}>Mono</MenuItem>
          </Select>
        </Box>
        <Divider orientation="vertical" flexItem sx={{bgcolor: '#E9E9E9'}} />
        <Box className="flex gap-0 items-center text-[#A445ED] justify-between">
            {
                themeMode && 
                <Box 
                    component='img'
                    alt="moon"
                    src="/assets/images/Group-dark.svg"
                    onClick={handleThemeChange}
                    className="w-[71.993px] h-[20px] md:w-[79.993px]"

                />
                ||
                <Box 
                    component='img'
                    alt="moon"
                    src="/assets/images/Group.svg"
                    onClick={handleThemeChange}
                />
            }
        </Box>
      </Box>
    </Box>
  )
}

export default Header
