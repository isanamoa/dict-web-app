import { Box, Divider, IconButton, Tooltip, Typography } from "@mui/material"

const Footer = () => {
  return (
    <Box className="w-full mt-2 mb-5 text-[0.875rem]">
      <Divider />
      <Typography className="mt-3 underline">
        {'Source'}
      </Typography>
        <Typography>
          {'https://en.wiktionary.org/wiki/keyboard'}
          <Tooltip title="Open in new tab">
            <IconButton>
              <Box 
                component='img'
                alt="moon"
                src="/assets/images/icon-new-window.svg"
                className="w-3 h-3"
              />
            </IconButton>
          </Tooltip>
        </Typography>
        
    </Box>
  )
}

export default Footer
