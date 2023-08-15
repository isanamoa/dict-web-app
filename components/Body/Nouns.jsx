import { Box, Divider, 
    Typography, List, ListSubheader, ListItem } from "@mui/material"


const Nouns = () => {
  return (
    <Box className="my-3">
            <Box>
            
                <Typography variant="body2"
                    className="text-[1.125rem] font-bold"
                >
                    noun
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
                        {`(etc.) A set of keys used to operate a 
                        typewriter, computer etc.`}
                    </ListItem>
                    <ListItem>
                        {`A component of many instruments including the piano, organ, 
                        and harpsichord consisting of usually black and white keys that cause 
                        different tones to be produced when struck.`}
                    </ListItem>
                    <ListItem>
                        {`A device with keys of a musical keyboard, 
                        used to control electronic 
                        sound-producing devices which may be built 
                        into or separate from the keyboard device.`}
                    </ListItem>
                </List>
            </Box>
            
            <Box className="mt-2 sm:w-1/4 text-[1rem]">
                <Typography component='div' className="flex gap-5 justify-start items-center" >
                    <span>{'Synonyms'}</span>
                    <span className="text-[#A445ED]">{'electronic keyboard'}</span>
                </Typography>
            </Box>

        </Box>
  )
}

export default Nouns
