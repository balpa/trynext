'use client';

import React, { useState } from 'react'
import '../styles.css'

export default function Home() {
    const [inputValue, setInputValue] = useState<string>('');

    function handleInputOnchange (event: React.FormEvent<HTMLInputElement>) {
        setInputValue(event.currentTarget.value);
    }

    // const url = 'https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr';
    // const options = {
    // method: 'GET',
    // headers: {
    //     'X-RapidAPI-Key': process.env.API_KEY,
    //     'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
    // }
    // };

    // try {
    //     const response = await fetch(url, options);
    //     const result = await response.text();
    //     console.log(result);
    // } catch (error) {
    //     console.error(error);
    // }

  return (
    <>
    <div className='w-4/5 py-2 mt-5 rounded-lg flex flex-col justify-center items-center'>
        <div className='glowing-text text-xl font-black'>Search for movies, persons etc.</div>
        <input 
            className='glowing-text w-3/4 h-8 bg-black border-2 border-[#ffb329] rounded font-extrabold focus:outline-none pl-5'
            type='text'
            defaultValue={''} 
            value={ inputValue } 
            onChange={(event) => handleInputOnchange(event)}/>
        <button
            className='w-3/4 h-8 bg-[#ffb329] rounded text-black font-extrabold mt-2'
        >
        Search
        </button>
    </div>
    <div>

    </div>
    </>
  )
}