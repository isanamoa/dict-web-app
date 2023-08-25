import { Box, Divider, IconButton, Link, Tooltip } from "@mui/material"

const Footer = ({ sourceUrl }) => {

  return (
    <Box className={`w-full mt-2 mb-5 text-[0.875rem] break-words`}>
      <Divider />
      <p className="mt-3 underline">
        {'Source'}
      </p>
      <p >
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
      </p>    
    </Box>
  )
}

export default Footer
