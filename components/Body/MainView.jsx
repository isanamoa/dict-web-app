import { Box, Typography, CardMedia } from "@mui/material"
import MeaningView from "./MeaningView";
import Footer from "./Footer";
import { useState } from "react";
import { PlayArrow } from "@mui/icons-material";

const MainView = ({ mainData }) => {
    const {fetchWord, wordData, dfont} = mainData;
    const [playPhonetic, setPlayPhonetic] = useState('')

    let sourceUrl = wordData && wordData[0]?.sourceUrls;

    const handlePlay = () =>{
        wordData && wordData[0]?.phonetics?.length > 0 &&
        setPlayPhonetic(wordData[0].phonetics?.filter(value => value.audio != '')[0]?.audio);
        const playTime = setTimeout(() => {
            setPlayPhonetic(prev=>!prev);
        }, 1000);
        return () => clearTimeout(playTime);
    }

 return (
    <Box className="w-full mt-6">
        <Box>
            <Box className="flex justify-between items-center ">
                <Box>
                    <Typography variant="h1"
                        sx={{fontSize:{xs:"2rem", md:"4rem"}, fontWeight:700}}
                    >
                        {wordData && (wordData[0]?.word?.charAt(0).toUpperCase() + wordData[0]?.word?.slice(1))}
                    </Typography>
                    <Typography variant="body2"
                        sx={{ fontSize:{xs: "1.125rem", md:"1.5rem"}, color:"#A445ED"}}
                    >
                        {wordData && wordData[0]?.phonetic}
                    </Typography>
                </Box>
                {
                    wordData && wordData[0]?.phonetics?.length > 0 
                    &&
                    <Box sx={{position:"relative", }}>

                        <Box component="button" 
                            sx={{ bgcolor:'#debdf8', color: '#A445ED', '&:hover': {bgcolor:'#A445ED', color:'#FFFFFF'}, 
                                position:'relative', zIndex: 1, borderRadius: '50%', p:{xs:1, sm:2},
                                display:'flex', justifyContent:'center', alignItems:'center' 
                            }}
                            onClick={handlePlay}
                        >
                            <PlayArrow />
                        </Box>

                        <CardMedia
                        component="audio" 
                        autoPlay
                        src={playPhonetic}
                        sx={{visibility: 'hidden', position:'absolute', zIndex: 0}}
                        />

                    </Box>
                }
                  
            </Box>
            
        </Box>

        {
            wordData && wordData[0]?.meanings?.map((meaning, index) => <MeaningView key={index} meaningData={{meaning, fetchWord}} />)
        }
            

        <Footer footerData={{sourceUrl, dfont}} />
        
    </Box>
  )
}

export default MainView
