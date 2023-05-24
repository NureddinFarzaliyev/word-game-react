import React, { useState } from 'react'
import { render } from 'react-dom'

const Game = ({ word }) => {

  const splittedWord = word.split('')

  const [firstLetter, correctLetter1, correctLetter2, correctLetter3, lastLetter] = splittedWord;

  let buttonLetters = [correctLetter1, correctLetter2, correctLetter3, getRandomLetter(), getRandomLetter(), getRandomLetter()]

  // Shuffle array using Fisher-Yates algorithm
  const shuffledButtonLetters = shuffleArray(buttonLetters);
  console.log(shuffledButtonLetters)

  // Get random letter from alphabet
  function getRandomLetter() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    if(alphabet[randomIndex] != correctLetter1 && alphabet[randomIndex] != correctLetter2 && alphabet[randomIndex] != correctLetter3){
      return alphabet[randomIndex];
    }else{
      return alphabet[randomIndex + 1]
    }
  }

  // Array shuffle algorithm using Fisher-Yates algorithm
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // function to check if it's right letter

  return (
    <div className='text-3xl text-white rounded-lg p-4 h-[70vh] bg-primary w-[80vw] ml-[10vw] md:w-[60vw] md:ml-[20vw] lg:w-[50vw] lg:ml-[25vw] mt-14'>
      <div>
        <span className='ml-1'>{firstLetter}</span>
        <span className='correct1 ml-1'>{correctLetter1}</span>
        <span className='correct2 ml-1'>{correctLetter2}</span>
        <span className='correct3 ml-1'>{correctLetter3}</span>
        <span className='ml-1'>{lastLetter}</span>
      </div>
      <div>
        {shuffledButtonLetters.map((element) => (
          <button onClick={() => {console.log(element)}}>{element}</button>
        ))}
      </div>
    </div>
  )
}

export default Game