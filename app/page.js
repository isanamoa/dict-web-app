'use client';
import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box, CssBaseline, CircularProgress } from "@mui/material";
import MainView from "@/components/Body/MainView";
import Header from "@/components/Header/Header";
import SearchBar from '@/components/Body/SearchBar';
import useDictionary from "@/api/useDictionary";

export default function Home() {
  const [themeMode, setThemeMode] = useState(false)
  const [dfont, setDfont] = useState('');

  const dictionaryData = useDictionary();
  const { isloading, wordData, fetchWord } = dictionaryData;

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
        <Box className={`w-full lg:w-[46rem] lg:mx-auto min-h-screen flex flex-col 
            items-center justify-between p-5 md:py-6 md:px-10 font-${dfont}`}>

          <Header headData={{themeMode, dfont, handleThemeChange, handleFontChange}} />
          <SearchBar searchData={{fetchWord}} />

          {
            isloading ?
            <Box sx={{ width: 1, mt:3, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <CircularProgress />
            </Box>
            :
            <MainView wordData={wordData}/>
          }

        </Box>
      
    </ThemeProvider>
  )
}
