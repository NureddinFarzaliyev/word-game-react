import React from 'react'
import { useState, useEffect } from 'react'

import Header from './header'
import Game from './game'

const Page = () => {

    const [words, setwords] = useState([])
    const [randomWord, setRandomWord] = useState('')

    // Api call configuration
    const url = 'https://wordle-answers-solutions.p.rapidapi.com/answers';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cfd8b3d15dmsh0556c8e8627f626p1a087ajsn24fbea066730',
            'X-RapidAPI-Host': 'wordle-answers-solutions.p.rapidapi.com'
        }
    };

    useEffect(() => {
        // Function to call api
        const callApi = async () => {
            try {
                const response = await fetch(url, options);
                const result = await response.json();
                setwords(result.data);
            } catch (error) {
                console.error(error);
            }
        }
        callApi()
    }, [])


    useEffect(() => {
        const generateRandomWord = () => {
            if (!randomWord && words.length > 0) {
                const randomNumber = Math.floor(Math.random() * words.length);
                setRandomWord(words[randomNumber]?.answer || '');
                console.log(randomWord)
            }
        };
      
        generateRandomWord();
    }, [words])
    

  return (    
    <div className='text-white'>
        <Header/>
        <Game word={randomWord} />
    </div>
  )
}

export default Page