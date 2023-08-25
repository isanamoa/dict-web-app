import { Box, Typography } from "@mui/material"

const ErrorControl = ({ wordData }) => {

    return (
    <Box sx={{ width:1,  mt:4, display: 'flex', 
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center', gap: 1,
            textAlign: 'center',
            fontFamily:'inherit'
        }}
    >
        <Box sx={{ pt: {xs:4, sm:8}, }}>
            <Typography variant="h5" sx={{ fontSize: '4rem',  py: 2 }}>
                &#128527;
            </Typography>
            <Typography variant="h6" sx={{ fontSize: "1.25rem", fontWeight:600, py: 2 }}>
                {wordData && wordData?.title}
            </Typography>
            <Typography variant="subtitle2" sx={{ fontSize: {xs: "0.938rem", md:"1.125rem"} }}>
                {wordData && wordData?.message} {wordData && wordData?.resolution} 
            </Typography>
        </Box>
        

    </Box>
  )
}

export default ErrorControl
