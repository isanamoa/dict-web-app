import { Box, Divider, Typography, List, ListItem, Button, Link } from "@mui/material";
//import useDictionary from "@/api/useDictionary";

const MeaningView = ({ meaningData }) => {
    //const dictionaryData = useDictionary();
    //const { fetchWord } = dictionaryData;
    const {meaning, fetchWord} = meaningData
    const handleSynonym = (text) => {
        return fetchWord(text);
    }
    return (
    <Box sx={{ my:2 }}>
            <Box>
                <Box className="w-auto">
                    <Typography variant="body2"
                        sx={{ fontSize:{xs: "1.125rem", md:"1.5rem"}, fontWeight:600, }}
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

            <Box sx={{ mb:2, fontSize:{xs: "0.938rem", md:"1.125rem"} }}>
                <Typography variant="body2" 
                    sx={{ mt:3, fontSize:{xs: "1rem", md:"1.125rem"}, color:"#757575" }}
                >
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
            
            <Box sx={{ mt:3, mb:2, fontSize:{xs: "0.938rem", md:"1.125rem"} }} >
                {meaning.synonyms.length > 0  && 
                <Typography component='div' className="flex gap-x-5 gap-y-2 justify-start items-center flex-wrap" >
                    <span>{'Synonyms'}</span>
                    {
                        meaning.synonyms.map((synonym, index)=>(
                            <Link 
                                component="button"
                                underline="hover"
                                key={index} 
                                sx={{ 
                                    color: '#A445ED', 
                                    textTransform: 'lowercase',
                                }} 
                                onClick={()=>handleSynonym(synonym)}
                            >
                                {synonym}
                            </Link>
                        )) 
                    }
                </Typography> }
            </Box>

        </Box>
  )
}

export default MeaningView;
