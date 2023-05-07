'use client';

import React, { useState } from 'react'

type Props = {}

export default function Home({}: Props) {
    const [inputValue, setInputValue] = useState<string>('');

    function handleInputOnchange (event: React.FormEvent<HTMLInputElement>) {
        setInputValue(event.currentTarget.value);
    }

  return (
    <>
    <div className='w-4/5 h-24 bg-blue-300 mt-5 rounded-lg flex flex-col justify-center items-center'>
        <div className='text-black text-xl font-black'>Search for movies, persons etc.</div>
        <input 
            className='w-3/4 h-8 rounded text-black font-extrabold focus:outline-none pl-5'
            type='text'
            defaultValue={''} 
            value={ inputValue } 
            onChange={(event) => handleInputOnchange(event)}/>
    </div>
    <div>

    </div>
    </>
  )
}