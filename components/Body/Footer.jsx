import { Box, Divider, IconButton, Link, Tooltip, Typography } from "@mui/material"

const Footer = ({ footerData }) => {
    const {sourceUrl, dfont} = footerData;
  return (
    <Box className={`w-full mt-2 mb-5 text-[0.875rem] break-words font-${dfont}`}>
      <Divider />
      <Typography className="mt-3 underline">
        {'Source'}
      </Typography>
      <Typography>
        {sourceUrl}
        <Link className="underline-none" href={sourceUrl} target="_blank"> 
          <Tooltip title="Open link in new tab">
            <IconButton>
              <Box 
                component='img'
                alt="moon"
                src="/assets/images/icon-new-window.svg"
                className="w-3 h-3"
              />
            </IconButton>
          </Tooltip>
        </Link>
      </Typography>    
    </Box>
  )
}

export default Footer
