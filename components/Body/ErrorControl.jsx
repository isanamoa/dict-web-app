import { Box, Typography } from "@mui/material"

const ErrorControl = ({ wordData }) => {
    console.log(wordData)
  return (
    <Box sx={{ width:1,  mt:4, display: 'flex', 
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center', gap: 1,
            textAlign: 'center'
        }}
    >
        <Box sx={{ boxShadow: 2, py: 2, px:5, width: {xs:1, md: 1/2 }}}>
            <Typography variant="h6" sx={{ py: 2 }}>
                {wordData && wordData?.title}
            </Typography>
            <Typography variant="body2" sx={{ py: 2 }}>
                {wordData && wordData?.message} 
            </Typography>
            <Typography variant="body2" sx={{ py: 2 }}>
                {wordData && wordData?.resolution} 
            </Typography>
        </Box>
        

    </Box>
  )
}

export default ErrorControl
