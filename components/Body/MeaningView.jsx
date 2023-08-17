import { Box, Divider, 
    Typography, List, ListSubheader, ListItem } from "@mui/material"


const MeaningView = ({ meaning }) => {
    //console.log(meaning.synonyms)
  return (
    <Box className="my-3">
            <Box>
            
                <Typography variant="body2"
                    className="text-[1.125rem] md:text-[1.5rem] font-bold"
                >
                    {meaning.partOfSpeech}
                </Typography>
            
                <Box >
                    <Divider variant="inset" 
                        className='relative bottom-4' 
                    />
                </Box>
            
            </Box>

            <Box className="mb-2 text-[0.938rem] md:text-[1.125rem]">
                <List sx = {{
                        listStyleType: 'disc',
                        pl: 2,
                        
                        '& .MuiListItem-root': {
                        display: 'list-item',
                        },
                    }}
                >
                    <ListSubheader className="ml-0 text-[1rem] md:text-[1.25rem]">
                        Meaning
                    </ListSubheader>
                    { meaning && meaning.definitions.map(value =>(
                            <>
                            <ListItem key={value.definition}>
                                {value.definition}
                            </ListItem>
                            {value.example && <ListItem key={value.example}>
                                { `"${value.example}"`}
                            </ListItem>}
                            </>
                        )) 
                    }
                
                </List>
            </Box>
            
            <Box className="my-2 text-[1rem] md:text-[1.25rem]">
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
