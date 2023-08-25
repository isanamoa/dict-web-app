'use client';
import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box, CssBaseline, CircularProgress } from "@mui/material";
import MainView from "@/components/Body/MainView";
import Header from "@/components/Header/Header";
import SearchBar from '@/components/Body/SearchBar';
import ErrorControl from '@/components/Body/ErrorControl';
import useDictionary from "@/api/useDictionary";

export default function Home() {
  const [themeMode, setThemeMode] = useState(false)
  const [dfont, setDfont] = useState('sans');

  const dictionaryData = useDictionary();
  const { isloading, isNotice, wordData, fetchWord } = dictionaryData;

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
        <Box className={`w-full lg:w-[46rem] lg:mx-auto p-5 md:py-6 md:px-10 font-${dfont}`}>

          <Header headData={{themeMode, dfont, handleThemeChange, handleFontChange}} />
          <SearchBar searchData={{ themeMode, fetchWord}} />

          {
            isloading ?
            <Box sx={{ width: 1, mt:3, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <CircularProgress />
            </Box>
            :
            (
              isNotice ? 
              <ErrorControl wordData={wordData} />
              :
              <MainView mainData={{themeMode, wordData, fetchWord}}/>
            )
          }

        </Box>
      
    </ThemeProvider>
  )
}
