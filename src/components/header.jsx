import React from 'react'

const Header = () => {
  return (
    <div className=' flex flex-col items-center justify-center'>
            <h1 className='text-text text-4xl font-displayFont mt-10'>FindWord Game</h1>
            <p className='mt-5 text-white opacity-60'>
                Created by <a href='https://www.github.com/nureddinfarzaliyev' target='blank' className='underline'>Nureddin Farzaliyev</a>
            </p>
        </div>
  )
}

export default Header