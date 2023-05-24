import React from 'react'
import { useState, useEffect } from 'react'

import Header from './header'
import Game from './game'

const Page = () => {

    const [words, setwords] = useState()
    const [randomWord, setRandomWord] = useState()

    // Api call configuration
    const url = 'https://wordle-answers-solutions.p.rapidapi.com/answers';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cfd8b3d15dmsh0556c8e8627f626p1a087ajsn24fbea066730',
            'X-RapidAPI-Host': 'wordle-answers-solutions.p.rapidapi.com'
        }
    };

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

    // Run api call function while page loaded
    useEffect(() => {
        console.log('api called')
        callApi()
    }, [])


    useEffect(() => {
        const randomNumber = Math.floor(Math.random() * 701);

        if(words){
            setRandomWord(words[randomNumber].answer);
        }

    }, [])


  return (    
    <div className='text-white'>
        <Header/>
        <Game />
        {randomWord}
    </div>
  )
}

export default Page