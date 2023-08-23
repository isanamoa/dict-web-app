import { Box, Divider, 
    Typography, List, ListSubheader, ListItem } from "@mui/material"


const MeaningView = ({ meaning }) => {

    return (
    <Box className="my-3">
            <Box>
                <Box className="w-auto">
                    <Typography variant="body2"
                        className="text-[1.125rem] md:text-[1.5rem] font-bold"
                    >
                        {meaning.partOfSpeech}
                    </Typography>
                </Box>
            
                <Box className="w-auto" >
                    <Divider variant="inset" 
                        className='relative bottom-3' 
                    />
                </Box>
            
            </Box>

            <Box className="mb-2 text-[0.938rem] md:text-[1.125rem]">
                <Typography variant="body2" className="mt-5 text-[1rem] md:text-[1.25rem] text-[#757575]">
                    Meaning
                </Typography>
                <List sx = {{
                        listStyleType: 'disc',
                        pl: 2,
                        
                        '& .MuiListItem-root': {
                        display: 'list-item',
                        },
                    }}
                >
                    { meaning && meaning.definitions.map((value, index) =>(
                            <Box key={2 + index}>
                                <ListItem>
                                    {value.definition}
                                </ListItem>
                                {value.example && <ListItem>
                                    { `"${value.example}"`}
                                </ListItem>}
                            </Box>
                        )) 
                    }
                
                </List>
            </Box>
            
            <Box className="mt-2 mb-5 text-[1rem] md:text-[1.25rem]">
                {meaning.synonyms.length > 0  && 
                <Typography component='div' className="flex gap-x-5 gap-y-2 justify-start items-center flex-wrap" >
                    <span>{'Synonyms'}</span>
                    {
                        meaning.synonyms.map((synonym, index)=>(
                            <span key={index} className="text-[#A445ED]">{synonym}</span>
                        )) 
                    }
                </Typography> }
            </Box>

        </Box>
  )
}

export default MeaningView;
