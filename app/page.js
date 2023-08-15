'use client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box, CssBaseline } from "@mui/material";
import MainView from "@/components/Body/MainView";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { useState } from 'react';
import SearchBar from '@/components/Body/SearchBar';


export default function Home() {
  const [themeMode, setThemeMode] = useState(false)
  const [dfont, setDfont] = useState('');
  
  const handleThemeChange = () => {
    setThemeMode(prev=>!prev);
  };

  const handleFontChange = (event) => {
    setDfont(event.target.value);
  };

  const customTheme = createTheme({
    palette: {
      mode: `${themeMode && 'dark' || 'light' }`,
    },
    
    breakpoints: {
      values: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
        xxl: 1536,
      },
    },
  });

  
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Box className={`min-h-screen flex flex-col 
          items-center justify-between p-5 font-${dfont}`}>

        <Header headData={{themeMode, dfont, handleThemeChange, handleFontChange}} />
        <SearchBar searchData={{themeMode}} />
        <MainView />
        <Footer />

      </Box>
    </ThemeProvider>
  )
}
