import { Box, Divider, 
    Typography, List, ListSubheader, ListItem } from "@mui/material"


const Verbs = () => {
  return (
    <Box className="my-3">
        <Box>
        
            <Typography variant="body2"
                className="text-[1.125rem] font-bold"
            >
                verb
            </Typography>
        
            <Box >
                <Divider variant="inset" 
                    className='relative bottom-4' 
                />
            </Box>
        
        </Box>
        <Box className="mb-2 text-[0.938rem]">
            <List sx = {{
                    listStyleType: 'disc',
                    pl: 2,
                    
                    '& .MuiListItem-root': {
                    display: 'list-item',
                    },
                }}
            >
                <ListSubheader className="ml-0 text-[1rem]" 
                >
                    Meaning
                </ListSubheader>
                <ListItem>
                    {'To type on a computer keyboard.'}
                </ListItem>
                <ListItem sx = {{listStyleType: 'none',}}>
                    {'“Keyboarding is the part of this job I hate the most.”'}
                </ListItem>
            </List>
        </Box>
    </Box>
  )
}

export default Verbs
