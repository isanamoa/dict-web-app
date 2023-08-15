import { Box, Divider, 
    Typography, List, ListSubheader, ListItem } from "@mui/material"
import Nouns from "./Nouns"
import Verbs from "./Verbs"


const MainView = () => {
  return (
    <Box className="w-full mt-6">
        <Box className="flex justify-between items-center">
            <Box>
                <Typography variant="h4"
                    className="text-[2rem] font-bold"
                >
                    {'keyboard'}
                </Typography>
                <Typography variant="body2"
                    className="text-[1.125rem] text-[#A445ED]"
                >
                    {'/ˈkiːbɔːd/'}
                </Typography>
            </Box>
            <Box 
                component='img'
                alt="play"
                src="/assets/images/icon-play.svg"
                className="w-12 h-12 flex items-start"
            />
        </Box>

        <Nouns />

        <Verbs />
        
    </Box>
  )
}

export default MainView
