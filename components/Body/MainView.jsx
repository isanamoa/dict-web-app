import { Box, Typography, CardMedia, Tooltip, IconButton } from "@mui/material"
import MeaningView from "./MeaningView";
import Footer from "../Footer/Footer";
import { useState } from "react";

const MainView = ({ mainData }) => {
    const {themeMode, wordData} = mainData;
    const [playPhonetic, setPlayPhonetic] = useState('')

    const handlePlay = () =>{
        wordData && wordData[0].phonetics?.length > 0 &&
        setPlayPhonetic(wordData[0].phonetics?.filter(value => value.audio != '')[0]?.audio);
        const playTime = setTimeout(() => {
            setPlayPhonetic(prev=>!prev);
        }, 1000);
        return () => clearTimeout(playTime);
    }

 return (
    <Box className="w-full mt-6">
        <Box>
            <Box className="flex justify-between items-center">
                <Box>
                    <Typography variant="h1"
                        className="text-[2rem] md:text-[4rem] font-bold"
                    >
                        {wordData && (wordData[0]?.word.charAt(0).toUpperCase() + wordData[0]?.word.slice(1))}
                    </Typography>
                    <Typography variant="body2"
                        className="text-[1.125rem] md:text-[1.5rem] text-[#A445ED]"
                    >
                        {wordData && wordData[0]?.phonetic}
                    </Typography>
                </Box>
                {
                    wordData && wordData[0]?.phonetics?.length > 0 
                    &&
                    <Box sx={{position:"relative", }}>
                            { 
                                themeMode &&
                                <Box 
                                component='img'
                                alt="play"
                                src="/assets/images/playbutton-dark.svg"
                                className="w-12 h-12 flex items-start"
                                onClick={handlePlay}
                                sx={{'&:hover': '#A445ED', position:'relative', zIndex: 1}}
                                /> 
                                ||
                                <Box 
                                component='img'
                                alt="play"
                                src="/assets/images/icon-play.svg"
                                className="w-12 h-12 flex items-start"
                                onClick={handlePlay}
                                sx={{'&:hover': '#A445ED', position:'relative', zIndex: 1}}
                                /> 
                            }
                            
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
            wordData && wordData[0].meanings?.map((meaning, index) => <MeaningView key={index} meaning={meaning} />)
        }
            

        <Footer sourceUrl={wordData && wordData[0].sourceUrls} />
        
    </Box>
  )
}

export default MainView
