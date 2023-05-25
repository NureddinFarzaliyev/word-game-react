import React from 'react'

const Game = ({ word }) => {
  console.log(word)

  const splittedWord = word.split('')

  const [firstLetter, correctLetter1, correctLetter2, correctLetter3, lastLetter] = splittedWord;

  let buttonLetters = [correctLetter1, correctLetter2, correctLetter3, getRandomLetter(), getRandomLetter(), getRandomLetter(), getRandomLetter(), getRandomLetter(), getRandomLetter()]

  // Shuffle array using Fisher-Yates algorithm
  const shuffledButtonLetters = shuffleArray(buttonLetters);
  // console.log(shuffledButtonLetters)

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

  const dash1 = document.querySelector('.dash-1')
  const dash2 = document.querySelector('.dash-2')
  const dash3 = document.querySelector('.dash-3')

  // function to check if it's right letter
  function checkLetter (buttonLetter) {
    const correctBtn1 = document.querySelector('.correct1')
    const correctBtn2 = document.querySelector('.correct2')
    const correctBtn3 = document.querySelector('.correct3')

    if(buttonLetter == correctLetter1){
      correctBtn1.classList.remove('hidden')
      dash1.classList.add('hidden')
    }
    if(buttonLetter == correctLetter2){
      correctBtn2.classList.remove('hidden')
      dash2.classList.add('hidden')
    }
    if(buttonLetter == correctLetter3){
      correctBtn3.classList.remove('hidden')
      dash3.classList.add('hidden')
    }

    checkDone();
  }

  // function to check if it's done
  function checkDone () {
    console.log('checked')
    if(dash1.classList.contains('hidden') && dash2.classList.contains('hidden') && dash3.classList.contains('hidden')){
      const nextBtn = document.querySelector('.nextBtn')
      nextBtn.classList.remove('hidden')
    }
  }

  // function to refresh the game
  function refreshGame() {
    window.location.reload();
  }

  return (
    <div className='text-3xl text-white rounded-lg p-4 h-[70vh] bg-primary w-[80vw] ml-[10vw] md:w-[60vw] md:ml-[20vw] lg:w-[50vw] lg:ml-[25vw] mt-14'>
      <div className='text-7xl flex items-center justify-center py-8'>
        <span className='ml-1'>{firstLetter}</span>
        <span className='correct1 hidden ml-1'>{correctLetter1}</span>
        <span className='dash-1 ml-1' >_</span>
        <span className='correct2 hidden ml-1'>{correctLetter2}</span>
        <span className='dash-2 ml-1' >_</span>
        <span className='correct3 hidden ml-1'>{correctLetter3}</span>
        <span className='dash-3 ml-1' >_</span>
        <span className='ml-1'>{lastLetter}</span>
      </div>
      <div className='grid grid-cols-3'>
        {shuffledButtonLetters.map((element, index) => (
          <button key={index} className='m-2 h-16 text-4xl bg-secondary hover:bg-accent transition rounded shadow-xl' onClick={() => {checkLetter(element)}}>{element}</button>
        ))}
      </div>
      <div className='flex justify-center'>
        <button onClick={refreshGame} className='bg-green-700 hidden px-20 py-3 mt-7 nextBtn rounded hover:bg-accent transition'>NEXT</button>
      </div>
    </div>
  )
}

export default Game