
import { useState, useEffect } from "react";
import Data from '@/utils/data.json';

const useDictionary = () => {
    const [wordData, setWordData] = useState(Data);
    const [isloading, setIsLoading] = useState(false);

    const fetchWord = async (searchword) => {
        try {
            setIsLoading(prev=>!prev);
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchword}`);
            const data = await response.json();
            setWordData(data);
            setIsLoading(prev=>!prev);

        } catch (error) {
            console.log('Error response', error.response);

        }

    }
    //useEffect(()=>fetchWord(), []);

  return { isloading, wordData, fetchWord };
}

export default useDictionary
