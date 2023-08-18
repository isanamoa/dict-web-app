
import { useState } from "react";
import Data from '@/utils/data.json';
import ErrrorData from '@/utils/errorData.json';

const useDictionary = () => {
    const [wordData, setWordData] = useState(Data);
    const [isloading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(null);
    const [isNotice, setIsNotice] = useState(false);

    const fetchWord = async (searchword) => {
        try {
            setIsLoading(prev=>!prev);
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchword}`);
            let data;
            if(response.status === 404) {
                setIsNotice(prev=>!prev);
                data = await response.json();
            }else {
                data = await response.json();
            }
            setWordData(data);
            setIsLoading(prev=>!prev);

        } catch (error) {
            console.log('Error response', error.response);
            if(error.response){
                if(error.response.status === 404){
                    setIsNotice(prev => !prev);
                    setWordData(ErrrorData);
                    setIsLoading(prev=>!prev);
                }else if(error.response.status >= 500){
                    setIsNotice(prev => !prev);
                    setIsError('Server error');
                    setIsLoading(false);
                }else{
                    setIsNotice(prev => !prev);
                    setWordData(ErrrorData);                    
                    setIsLoading(false); 
                }
            }else{
                setWordData(ErrrorData);
                setIsNotice(prev => !prev);
                setIsError('You are using offline data', error);
                setIsLoading(false); 
            }
            
            /*setTimeout(() => {
                setIsNotice(prev => !prev)
                setWordData(Data);
            }, 10000);*/

        }

    }

  return { isloading, isError, isNotice, wordData, fetchWord };
}

export default useDictionary
